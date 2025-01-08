import { createFeature, createReducer, on } from '@ngrx/store';
import { SubscriberActions } from './subscriber.actions';
import { Subscriber } from '../models';

export const subscriberFeatureKey = 'subscriber';

export interface State {
  subscribers: Subscriber[];
}

export const initialState: State = {
  subscribers: [],
};

export const reducer = createReducer(
  initialState,
  on(SubscriberActions.loadSubscribers, (state) => {
    return {
      ...state,
    };
  }),
  on(SubscriberActions.loadSubscribersSuccess, (state, action) => {
    return {
      ...state,
      subscribers: action.data,
    };
  }),
  on(SubscriberActions.loadSubscribersFailure, (state, error) => {
    return {
      ...state,
      error,
    };
  }),
  ////////// SECCION CREATE
  on(SubscriberActions.createSubscriberSuccess, (state, { subscriber }) => ({
    ...state,
    subscribers: [...state.subscribers, subscriber],
  })),
  on(SubscriberActions.createSubscriberFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  ////////// SECCION UPDATE
  on(SubscriberActions.updateSubscriber, (state) => {
    return {
      ...state,
    };
  }),
  on(SubscriberActions.updateSubscriberSuccess, (state, { subscriber }) => {
    return {
      ...state,
      subscribers: state.subscribers.map((c) => (c.id === subscriber.id ? subscriber : c)),
    };
  }),
  on(SubscriberActions.updateSubscriberFailure, (state, { error }) => {
    return {
      ...state,
      error,
    };
  }),


  on(SubscriberActions.updateRemainingDaysSuccess, (state, { id, remainingDays }) => ({
    ...state,
    subscribers: state.subscribers.map((subscriber) =>
      subscriber.id === id ? { ...subscriber, remainingDays } : subscriber
    ),
  })),
  on(SubscriberActions.updateRemainingDaysFailure, (state, { error }) => ({
    ...state,
    error,
  })),


  on(SubscriberActions.updateSubscriptionEndDate, (state, { subscriberId, subscriptionEndDate }) => ({
    ...state,
    subscribers: state.subscribers.map((subscriber) =>
      subscriber.id === subscriberId
        ? { ...subscriber, subscriptionEndDate: new Date(subscriptionEndDate) }
        : subscriber
    ),
  })),

  ////////// SECCION DELETE
  on(SubscriberActions.deleteSubscriber, (state, { id }) => ({
    ...state,
    subscribers: state.subscribers.filter((subscriber) => subscriber.id !== id),
  })),
  ////////// SECCION SEARCH

  on(SubscriberActions.searchSubscribers, (state) => {
    return { ...state };
  }),
  on(SubscriberActions.searchSubscribersSuccess, (state, { subscribers }) => {
    return {
      ...state,
      subscribers,
    };
  }),
  on(SubscriberActions.searchSubscribersFailure, (state, { error }) => {
    return {
      ...state,
    };
  })
);

export const subscriberFeature = createFeature({
  name: subscriberFeatureKey,
  reducer,
});
