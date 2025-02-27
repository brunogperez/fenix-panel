import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Subscriber } from '../models';

export const SubscriberActions = createActionGroup({
  source: 'Subscriber',
  events: {
    'Load Subscribers': emptyProps(),
    'Load Subscribers Success': props<{ data: Subscriber[] }>(),
    'Load Subscribers Failure': props<{ error: Error }>(),

    'Create Subscriber': props<{ subscriber: Subscriber }>(),
    'Create Subscriber Success': props<{ subscriber: Subscriber }>(),
    'Create Subscriber Failure': props<{ error: Error }>(),

    'Update Subscriber': props<{ id: string; update: Partial<Subscriber> }>(),
    'Update Subscriber Success': props<{ subscriber: Subscriber }>(),
    'Update Subscriber Failure': props<{ error: Error }>(),

    'Update Remaining Days': props<{
      id: string;
      remainingDays: number;
    }>(),
    'Update Remaining Days Success': props<{
      id: string;
      remainingDays: number;
    }>(),
    'Update Remaining Days Failure': props<{ error: any }>(),

    'Update Subscription End Date': props<{
      subscriberId: string;
      subscriptionEndDate: string;
    }>(),
    'Update Subscription End Date Success': props<{
      subscriberId: string;
      subscriptionEndDate: string;
    }>(),
    'Update Subscription End Date Failure': props<{ error: any }>(),

    'Delete Subscriber': props<{ id: string }>(),
    'Delete Subscriber Success': props<{ data: Subscriber[] }>(),
    'Delete Subscriber Failure': props<{ error: Error }>(),

    'Search Subscribers': props<{ term: string }>(),
    'Search Subscribers Success': props<{ subscribers: Subscriber[] }>(),
    'Search Subscribers Failure': props<{ error: Error }>(),
  },
});
