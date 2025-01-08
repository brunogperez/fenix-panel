import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { filter, map, Observable } from 'rxjs';
import { User } from './users/models';
import { Store } from '@ngrx/store';
import { SubscriberActions } from './subscribers/store/subscriber.actions';
import { Subscriber } from './subscribers/models';
import { selectorSubscribers } from './subscribers/store/subscriber.selectors';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  subscriber$: Observable<Subscriber[]>;
  authUser$: Observable<User | null>;
  isAdmin$: Observable<boolean>;
  currentRouteName: string = '';
  routeNames: { [key: string]: string } = {
    '/home': 'Inicio',
    '/users': 'Usuarios',
    '/subscribers': 'Clientes',
    '/products': 'Productos',
    '/inscriptions': 'Renovaciones',
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store
  ) {
    this.authUser$ = this.authService.authUser$;

    this.isAdmin$ = this.authUser$.pipe(map((user) => user?.role === 'admin'));
    this.subscriber$ = this.store.select(selectorSubscribers);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const baseRoute = event.url.split('/')[2];
        const routePath = `/${baseRoute}`;
        this.currentRouteName =
          this.routeNames[routePath] || 'Ruta desconocida';
      });
  }

  ngOnInit(): void {
    this.executeOncePerDay();
  }

  executeOncePerDay(): void {
 /*    const today = new Date().toDateString();
    const lastExecutionDate = localStorage.getItem('lastSubscriberUpdateDate');

    if (lastExecutionDate === today) return;

    localStorage.setItem('lastSubscriberUpdateDate', today);
 */
    this.subscriber$
      .pipe(
        map((subscribers) =>
          subscribers.map((subscriber) => {
            const subscriptionEndDate = new Date(
              subscriber.subscriptionEndDate
            );
            const remainingDays = Math.max(
              Math.ceil(
                (subscriptionEndDate.getTime() - Date.now()) /
                  (1000 * 60 * 60 * 24)
              ),
              0
            );
            
            if (subscriber.remainingDays !== remainingDays) {
              this.store.dispatch(
                SubscriberActions.updateRemainingDays({
                  id: subscriber.id,
                  remainingDays,
                })
              );
            }

            return { ...subscriber, subscriptionEndDate, remainingDays };
          })
        )
      )
      .subscribe({
        next: (updatedSubscribers) =>
          console.log('Subscribers updated:', updatedSubscribers),
        error: (err) => console.error('Error updating subscribers:', err),
      });
  }

  logout(): void {
    this.authService.logout();
  }
}
