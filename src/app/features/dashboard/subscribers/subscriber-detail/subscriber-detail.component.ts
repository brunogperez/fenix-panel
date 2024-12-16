import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscriber } from '../models';
import { Course } from '../../courses/models';
import { Inscription } from '../../inscriptions/models';

import Swal from 'sweetalert2';
import { InscriptionActions } from '../../inscriptions/store/inscription.actions';
import { selectorSubscribers } from '../store/subscriber.selectors';
import { SubscriberActions } from '../store/subscriber.actions';
import { selectCourse } from '../../courses/store/course.selectors';
import { CourseActions } from '../../courses/store/course.actions';
import { combineLatest, map, Observable } from 'rxjs';
import { selectorInscriptions } from '../../inscriptions/store/inscription.selectors';

@Component({
  selector: 'app-subscriber-detail',
  templateUrl: './subscriber-detail.component.html',
  styleUrl: './subscriber-detail.component.scss',
})
export class SubscriberDetailComponent implements OnInit {
  courseId: string;
  subscriberId?: string;
  courses$?: Observable<Course[]>;
  subscriber$?: Observable<Subscriber>;
  inscriptions$?: Observable<Inscription[]>;
  inscriptionsByStudent$: Observable<Inscription[]>;
  coursesByStudent$?: Observable<Course[]>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.courseId = this.activatedRoute.snapshot.params['id'];
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

    this.courses$ = this.store.select(selectCourse);

    this.coursesByStudent$ = combineLatest([
      this.courses$,
      this.inscriptionsByStudent$,
    ]).pipe(
      map(([courses, inscriptionsByStudent]) => {
        const inscriptions = inscriptionsByStudent.map((i) => i.courseId);

        return courses.filter((course) => inscriptions.includes(course.id));
      })
    );
  }
  ngOnInit(): void {
    this.store.dispatch(SubscriberActions.loadSubscribers());
    this.store.dispatch(CourseActions.loadCourses());
    this.store.dispatch(InscriptionActions.loadInscriptions());
  }

  onDeleteInscription(id: string) {
    const courseRoute = this.courseId;
    if (courseRoute) {
      this.store.select(selectorInscriptions).subscribe((inscriptions) => {
        const filteredInscriptions = inscriptions.filter(
          (inscription) => inscription.courseId === id
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
