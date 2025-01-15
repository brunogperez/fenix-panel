import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import Swal from 'sweetalert2';

import {
  catchError,
  concatMap,
  distinctUntilChanged,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { SubscriberActions } from './subscriber.actions';
import { SubscriberService } from '../../../../core/services/subscribers.service';
import { InscriptionService } from '../../../../core/services/inscriptions.service';

@Injectable()
export class SubscriberEffects {
  loadSubscribers$: Actions<Action<string>>;
  loadSubscribersAfterUpdate$: Actions<Action<string>>;
  createSubscribers$: Actions<Action<string>>;
  updateSubscribers$: Actions<Action<string>>;
  updateRemainingDays$: Actions<Action<string>>;
  updateSubscriptionEndDate$: Actions<Action<string>>;
  deleteSubscribers$: Actions<Action<string>>;
  searchSubscribers$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private subscriberService: SubscriberService,
    private inscriptionsService: InscriptionService
  ) {
    this.loadSubscribers$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(SubscriberActions.loadSubscribers),
        concatMap((action) =>
          this.subscriberService.getSubscribers().pipe(
            map((res) =>
              SubscriberActions.loadSubscribersSuccess({ data: res })
            ),
            catchError((error) =>
              of(SubscriberActions.loadSubscribersFailure({ error }))
            )
          )
        )
      );
    });
    this.loadSubscribersAfterUpdate$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(SubscriberActions.updateSubscriberSuccess),
        map(() => SubscriberActions.loadSubscribers())
      );
    });

    this.createSubscribers$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(SubscriberActions.createSubscriber),
        mergeMap(({ subscriber }) =>
          this.subscriberService.createSubscriber(subscriber).pipe(
            map((newSubscriber) => {
              return SubscriberActions.createSubscriberSuccess({
                subscriber: newSubscriber,
              });
            }),
            catchError((error) => {
              Swal.fire('Error', 'No se pudo crear el suscriptor.', 'error');
              return of(SubscriberActions.createSubscriberFailure({ error }));
            })
          )
        )
      );
    });

    this.updateSubscribers$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(SubscriberActions.updateSubscriber),
        distinctUntilChanged(),
        mergeMap(({ id, update }) =>
          this.subscriberService.updateSubscriberById(id, update).pipe(
            map((subscriber) => {
              const updateStudent = subscriber[0];
              return SubscriberActions.updateSubscriberSuccess({
                subscriber: updateStudent,
              });
            }),
            catchError((error) => {
              Swal.fire('Error', 'No se pudo actualizar el alumno.', 'error');
              return of(SubscriberActions.updateSubscriberFailure({ error }));
            })
          )
        )
      );
    });

    this.updateRemainingDays$ = createEffect(() =>
      this.actions$.pipe(
        ofType(SubscriberActions.updateRemainingDays),
        mergeMap(({ id, remainingDays }) =>
          this.subscriberService.updateRemainingDays(id, remainingDays).pipe(
            map(() =>
              SubscriberActions.updateRemainingDaysSuccess({
                id,
                remainingDays,
              })
            ),
            catchError((error) =>
              of(SubscriberActions.updateRemainingDaysFailure({ error }))
            )
          )
        )
      )
    );

    this.updateSubscriptionEndDate$ = createEffect(() =>
      this.actions$.pipe(
        ofType(SubscriberActions.updateSubscriptionEndDate),
        mergeMap(({ subscriberId, subscriptionEndDate }) =>
          this.subscriberService
            .updateSubscriberEndDate(subscriberId, subscriptionEndDate)
            .pipe(
              mergeMap(() => [
                SubscriberActions.updateSubscriptionEndDateSuccess({
                  subscriberId,
                  subscriptionEndDate,
                }),
              ]),
              catchError((error) =>
                of(
                  SubscriberActions.updateSubscriptionEndDateFailure({ error })
                )
              )
            )
        )
      )
    );

    this.deleteSubscribers$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(SubscriberActions.deleteSubscriber),
        switchMap(({ id }) =>
          this.subscriberService.removeSubscriberById(id).pipe(
            map((res) => {
              Swal.fire(
                '¡Eliminado!',
                'El suscriptor ha sido eliminado.',
                'success'
              );
              return SubscriberActions.deleteSubscriberSuccess({ data: res });
            }),
            catchError((error) => {
              Swal.fire(
                'Error',
                'Hubo un problema al eliminar el suscriptor.',
                'error'
              );
              return of(SubscriberActions.deleteSubscriberFailure({ error }));
            })
          )
        )
      );
    });

    this.searchSubscribers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(SubscriberActions.searchSubscribers),
        mergeMap(({ term }) =>
          (term
            ? this.inscriptionsService.searchSubscribers(term)
            : this.subscriberService.getSubscribers()
          ).pipe(
            map((subscribers) =>
              SubscriberActions.searchSubscribersSuccess({ subscribers })
            ),
            catchError((error) =>
              of(SubscriberActions.searchSubscribersFailure({ error }))
            )
          )
        )
      )
    );
  }
}
