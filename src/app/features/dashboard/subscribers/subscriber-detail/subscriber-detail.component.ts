import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscriber } from '../models';
import { Inscription } from '../../inscriptions/models';
import Swal from 'sweetalert2';
import { InscriptionActions } from '../../inscriptions/store/inscription.actions';
import { selectorSubscribers } from '../store/subscriber.selectors';
import { SubscriberActions } from '../store/subscriber.actions';
import { map, Observable } from 'rxjs';
import { selectorInscriptions } from '../../inscriptions/store/inscription.selectors';

@Component({
  selector: 'app-subscriber-detail',
  templateUrl: './subscriber-detail.component.html',
  styleUrl: './subscriber-detail.component.scss',
})
export class SubscriberDetailComponent implements OnInit {
  productId: string;
  subscriberId?: string;
  subscriber$?: Observable<Subscriber>;
  inscriptions$?: Observable<Inscription[]>;
  inscriptionsByStudent$: Observable<Inscription[]>;

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
  }
  ngOnInit(): void {
    this.store.dispatch(SubscriberActions.loadSubscribers());
  }

}
