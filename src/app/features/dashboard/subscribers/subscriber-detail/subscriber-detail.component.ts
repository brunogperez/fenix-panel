import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscriber } from '../models';
import { Inscription } from '../../inscriptions/models';
import { Product } from '../../products/models';

import Swal from 'sweetalert2';
import { InscriptionActions } from '../../inscriptions/store/inscription.actions';
import { selectorSubscribers } from '../store/subscriber.selectors';
import { SubscriberActions } from '../store/subscriber.actions';
import { combineLatest, map, Observable } from 'rxjs';
import { selectorInscriptions } from '../../inscriptions/store/inscription.selectors';
import { selectProduct } from '../../products/store/product.selectors';
import { ProductActions } from '../../products/store/product.actions';

@Component({
  selector: 'app-subscriber-detail',
  templateUrl: './subscriber-detail.component.html',
  styleUrl: './subscriber-detail.component.scss',
})
export class SubscriberDetailComponent implements OnInit {
  productId: string;
  subscriberId?: string;
  products$?: Observable<Product[]>;
  subscriber$?: Observable<Subscriber>;
  inscriptions$?: Observable<Inscription[]>;
  inscriptionsByStudent$: Observable<Inscription[]>;
  productsBySubscriber$?: Observable<Product[]>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.subscriberId = this.activatedRoute.snapshot.params['id'];
    this.inscriptions$ = this.store.select(selectorInscriptions);
    this.inscriptionsByStudent$ = this.inscriptions$.pipe(
      map((inscriptions) =>
        inscriptions.filter(
          (inscription) => inscription.subscriberId === this.subscriberId
        )
      )
    );
    this.subscriber$ = this.store
      .select(selectorSubscribers)
      .pipe(
        map(
          (students) =>
            students.find((student) => student.id === this.subscriberId)!
        )
      );

    this.products$ = this.store.select(selectProduct);

    this.productsBySubscriber$ = combineLatest([
      this.products$,
      this.inscriptionsByStudent$,
    ]).pipe(
      map(([products, inscriptionsByStudent]) => {
        const inscriptions = inscriptionsByStudent.map((i) => i.productId);

        return products.filter((product) => inscriptions.includes(product.id));
      })
    );
  }
  ngOnInit(): void {
    this.store.dispatch(SubscriberActions.loadSubscribers());
    this.store.dispatch(ProductActions.loadProducts());
    this.store.dispatch(InscriptionActions.loadInscriptions());
  }

  onDeleteInscription(id: string) {
    const courseRoute = this.productId;
    if (courseRoute) {
      this.store.select(selectorInscriptions).subscribe((inscriptions) => {
        const filteredInscriptions = inscriptions.filter(
          (inscription) => inscription.productId === id
        );
        if (filteredInscriptions.length > 0) {
          Swal.fire({
            title: '¿Estás seguro?',
            text: 'No podrás revertir esta acción',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
              this.store.dispatch(
                InscriptionActions.deleteInscription({
                  id: filteredInscriptions[0].id,
                })
              );
            }
          });
        }
      });
    }
  }
}
