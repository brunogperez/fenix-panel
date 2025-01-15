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

  subscriberId?: string;
  subscriber$?: Observable<Subscriber>;


  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.subscriberId = this.activatedRoute.snapshot.params['id'];
    this.subscriber$ = this.store
      .select(selectorSubscribers)
      .pipe(
        map(
          (students) =>
            students.find((student) => student._id === this.subscriberId)!
        )
      );
  }
  ngOnInit(): void {
    this.store.dispatch(SubscriberActions.loadSubscribers());
  }

}
