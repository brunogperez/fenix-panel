import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubscriberDialogComponent } from './subscriber-dialog/subscriber-dialog.component';
import { Subscriber } from './models';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  Subject,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { selectorSubscribers } from './store/subscriber.selectors';
import { SubscriberActions } from './store/subscriber.actions';
import { User } from '../users/models';
import { selectAuthUser } from '../../../store/selectors/auth.selectors';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrl: './subscribers.component.scss',
})
export class SubscriberComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'createdAt', 'actions'];
  user$: Observable<User | null>;
  isAdmin$: Observable<boolean>;
  subscriber$: Observable<Subscriber[]>;

  searchTerm$ = new Subject<string>();
  dataSource: Subscriber[] = [];

  isLoading = false;
  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.user$ = this.store.select(selectAuthUser);
    this.isAdmin$ = this.user$.pipe(map((user) => user?.role === 'admin'));
    this.subscriber$ = this.store.select(selectorSubscribers);
  }

  ngOnInit(): void {
    
    this.searchTerm$
      .pipe(startWith(''), debounceTime(400), distinctUntilChanged())
      .subscribe((term) => {
        this.store.dispatch(SubscriberActions.searchSubscribers({ term }));
      });
  }

  search(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }

  goToDetail(id: string): void {
    this.router.navigate([id, 'detail'], { relativeTo: this.activatedRoute });
  }

  openDialog(editSubscriber?: Subscriber): void {
    this.matDialog
      .open(SubscriberDialogComponent, { data: { editSubscriber } })
      .afterClosed()
      .subscribe({
        next: (res) => {
          if (!!res) {
            if (editSubscriber) {
              this.store.dispatch(
                SubscriberActions.updateSubscriber({
                  id: editSubscriber.id,
                  update: res,
                })
              );
            } else {
              this.store.dispatch(
                SubscriberActions.createSubscriber({ subscriber: res })
              );
            }
          }
        },
      });
  }

  onDelete(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.store.dispatch(SubscriberActions.deleteSubscriber({ id }));
      }
    });
  }
}
