import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSubscriber from './subscriber.reducer';

export const selectSubscriberState = createFeatureSelector<fromSubscriber.State>(
  fromSubscriber.subscriberFeatureKey
);

export const selectorSubscribers = createSelector(
  selectSubscriberState,
  (state) => state.subscribers
);
