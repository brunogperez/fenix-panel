import { createFeature, createReducer, on, Action } from '@ngrx/store';
import { InscriptionActions } from './inscription.actions';
import { Inscription } from '../models';
import { generateRandomString } from '../../../../shared/utils';
import { HttpErrorResponse } from '@angular/common/http';

export const inscriptionFeatureKey = 'inscription';

export interface State {
  isLoadingInscription: boolean;
  loadInscriptionError: Error | null | HttpErrorResponse;
  inscriptions: Inscription[];
  selectedProductId: string | null;
}

export const initialState: State = {
  isLoadingInscription: false,
  loadInscriptionError: null,
  inscriptions: [],
  selectedProductId: null,
};

export const reducer = createReducer(
  initialState,
  ////////// SECCION LOAD
  on(InscriptionActions.loadInscriptions, (state) => {
    return {
      ...state,
      isLodingInscription: true,
    };
  }),
  on(InscriptionActions.loadInscriptionsSuccess, (state, action) => {
    return {
      ...state,

      inscriptions: action.data,
      isLodingInscription: false,
      loadInscriptionError: null,
    };
  }),
  on(InscriptionActions.loadInscriptionsFailure, (state, action) => {
    return {
      ...state,

      loadInscriptionError: action.error,
      isLodingInscription: false,
    };
  }),
  ////////// SECCION LOADBYCOURSE
  on(InscriptionActions.loadInscriptionsByCourse, (state) => {
    return {
      ...state,
    };
  }),
  on(InscriptionActions.loadInscriptionsByCourseSuccess, (state, action) => {
    return {
      ...state,
      inscriptions: action.data,
    };
  }),
  on(InscriptionActions.loadInscriptionsByCourseFailure, (state, error) => {
    return {
      ...state,
      error,
    };
  }),
  ////////// SECCION CREATE
  on(InscriptionActions.createInscription, (state, action) => {
    return {
      ...state,
      inscriptions: [
        ...state.inscriptions,
        {
          id: generateRandomString(25),
          productId: action.productId,
          subscriberId: action.subscriberId,
        },
      ],
    };
  }),

  ////////// SECCION DELETE
  on(InscriptionActions.deleteInscription, (state, action) => ({
    ...state,
    inscriptions: state.inscriptions.filter(
      (insciption) => insciption.subscriberId !== action.id
    ),
  }))
);

export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});
