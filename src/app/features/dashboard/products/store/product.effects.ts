import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, distinctUntilChanged, map, mergeMap, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { ProductService } from '../../../../core/services/products.service';
import { ProductActions } from './product.actions';
import { of } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable()
export class ProductEffects {
  loadProducts$: Actions<Action<string>>;
  loadProductById$: Actions<Action<string>>;
  loadProductsAfterUpdate$: Actions<Action<string>>;
  deleteProducts$: Actions<Action<string>>;
  updateProducts$: Actions<Action<string>>;
  createProducts$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {
    this.loadProducts$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.loadProducts),
        concatMap((action) =>
          this.productService.getProducts().pipe(
            map((res) => ProductActions.loadProductsSuccess({ data: res })),
            catchError((error) =>
              of(ProductActions.loadProductsFailure({ error }))
            )
          )
        )
      );
    });

    this.loadProductById$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.loadProductById),
        mergeMap(({ id }) =>
          this.productService.getProductById(id).pipe(
            map((product) =>
              ProductActions.loadProductByIdSuccess({ data: product })
            ),
            catchError((error) =>
              of(ProductActions.loadProductByIdFailure({ error }))
            )
          )
        )
      );
    });

    this.loadProductsAfterUpdate$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.updateProductSuccess),
        map(() => ProductActions.loadProducts())
      );
    });

    this.createProducts$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.createProduct),
        mergeMap(({ product }) =>
          this.productService.createProduct(product).pipe(
            map((newProduct) => {
              return ProductActions.createProductSuccess({
                product: newProduct,
              });
            }),
            catchError((error) => {
              Swal.fire('Error', 'No se pudo crear el curso.', 'error');
              return of(ProductActions.createProductFailure({ error }));
            })
          )
        )
      );
    });

    this.updateProducts$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.updateProduct),
        distinctUntilChanged(),
        mergeMap(({ id, update }) =>
          this.productService.updateProductById(id, update).pipe(
            map((product) => {
              const updatedProduct = product[0];
              return ProductActions.updateProductSuccess({
                product: updatedProduct,
              });
            }),
            catchError((error) => {
              Swal.fire('Error', 'No se pudo actualizar el curso.', 'error');
              return of(ProductActions.updateProductFailure({ error }));
            })
          )
        )
      );
    });

    this.deleteProducts$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.deleteProduct),
        switchMap(({ id }) =>
          this.productService.removeProductById(id).pipe(
            map((res) => {
              Swal.fire(
                '¡Eliminado!',
                'El curso ha sido eliminado.',
                'success'
              );
              return ProductActions.deleteProductSuccess({ data: res });
            }),
            catchError((error) => {
              Swal.fire(
                'Error',
                'Hubo un problema al eliminar el producto.',
                'error'
              );
              return of(ProductActions.deleteProductFailure({ error }));
            })
          )
        )
      );
    });
  }
}
