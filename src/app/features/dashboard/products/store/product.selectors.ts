import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.State>(
  fromProduct.productFeatureKey
);

export const selectProduct = createSelector(
  selectProductState,
  (state) => state.products
);
export const selectProductById = createSelector(
  selectProductState,
  (state) => state.product
);