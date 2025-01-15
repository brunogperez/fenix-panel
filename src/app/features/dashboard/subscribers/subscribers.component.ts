import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RenovationDialogComponent } from './renovation-dialog/renovation-dialog.component';
import { SubscriberDialogComponent } from './subscriber-dialog/subscriber-dialog.component';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrl: './subscribers.component.scss',
})
export class SubscriberComponent implements OnInit {
  SubscriberDialogComponent = SubscriberDialogComponent;
  RenovationDialogComponent = RenovationDialogComponent;

  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'remainingDays',
    'endSubscriptionDate',
    'renovations',
    'actions',
  ];
  user$: Observable<User | null>;
  isAdmin$: Observable<boolean>;
  subscriber$: Observable<Subscriber[]>;

  searchTerm$ = new Subject<string>();
  dataSource = new MatTableDataSource<Subscriber>([]);

  isLoading = false;

  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @ViewChild(MatSort) sort!: MatSort;

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
    this.store.dispatch(SubscriberActions.loadSubscribers());
    this.searchTerm$
      .pipe(startWith(''), debounceTime(400), distinctUntilChanged())
      .subscribe((term) => {
        this.store.dispatch(SubscriberActions.searchSubscribers({ term }));
      });

    this.executeOncePerDay();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  search(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }

  goToDetail(_id: string): void {
    this.router.navigate([_id, 'detail'], { relativeTo: this.activatedRoute });
  }

  openDialog(dialogComponent: any, editSubscriber?: Subscriber): void {
    this.matDialog
      .open(dialogComponent, { data: { editSubscriber } })
      .afterClosed()
      .subscribe({
        next: (res) => {
          if (!!res) {
            if (editSubscriber) {
              this.store.dispatch(
                SubscriberActions.updateSubscriber({
                  id: editSubscriber._id,
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

  executeOncePerDay(): void {
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
                  id: subscriber._id,
                  remainingDays,
                })
              );
            }

            return { ...subscriber, subscriptionEndDate, remainingDays };
          })
        )
      )
      .subscribe({
        error: (err) => console.error('Error updating subscribers:', err),
      });
  }

  sendWhatsAppMessage(clientNumber: number): void {
    const phoneNumber = clientNumber;
    const message = encodeURIComponent(
      'Estimado cliente. Su suscripción a fenixIPTV está por vencer. Si desea renovarla, por favor comuníquese con nosotros.'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Abrir el enlace en una nueva ventana/pestaña
    window.open(whatsappUrl, '_blank');
  }

  copySubscriber(subscriber: Subscriber): void {
    const formattedDate = new Date(
      subscriber.subscriptionEndDate
    ).toLocaleDateString();

    const subscriberData = `
    ID: ${subscriber._id}
    Name: ${subscriber.firstName} ${subscriber.lastName}
    Email: ${subscriber.email}
    Phone: ${subscriber.phone}
    Vencimiento: ${formattedDate}
  `;
    navigator.clipboard.writeText(subscriberData).then(
      () => {
        this._snackBar.open('Datos copiados al portapapeles!', '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 2000,
        });
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo copiar al portapapeles.',
        });
        console.error('Error al copiar al portapapeles:', err);
      }
    );
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
