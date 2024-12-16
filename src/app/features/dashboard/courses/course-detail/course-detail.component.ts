import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, ClassItem } from '../models';
import { Store } from '@ngrx/store';
import { selectorInscriptions } from '../../inscriptions/store/inscription.selectors';
import { combineLatest, map, Observable } from 'rxjs';
import { InscriptionActions } from '../../inscriptions/store/inscription.actions';
import { Inscription } from '../../inscriptions/models';
import { Subscriber } from '../../subscribers/models';
import { selectorSubscribers } from '../../subscribers/store/subscriber.selectors';
import { SubscriberActions } from '../../subscribers/store/subscriber.actions';
import Swal from 'sweetalert2';
import { CourseActions } from '../store/course.actions';
import { selectCourseById } from '../store/course.selectors';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent implements OnInit {
  courseId: string;
  course$: Observable<Course>;
  classList: ClassItem[] = [];
  inscriptions$: Observable<Inscription[]>;
  inscriptionsByCourse$: Observable<Inscription[]>;
  studentsByCourse$: Observable<Subscriber[]>;
  students$: Observable<Subscriber[]>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.courseId = this.activatedRoute.snapshot.params['id'];
    this.students$ = this.store.select(selectorSubscribers);
    this.course$ = this.store.select(selectCourseById);
    this.inscriptions$ = this.store.select(selectorInscriptions);
    this.inscriptionsByCourse$ = this.inscriptions$.pipe(
      map((inscriptions) =>
        inscriptions.filter(
          (inscription) => inscription.courseId === this.courseId
        )
      )
    );

    this.studentsByCourse$ = combineLatest([
      this.students$,
      this.inscriptionsByCourse$,
    ]).pipe(
      map(([students, inscriptionsByCourse]) => {
        const subscriberIds = inscriptionsByCourse.map((i) => i.subscriberId);
        return students.filter((student) => subscriberIds.includes(student.id));
      })
    );
  }
  ngOnInit(): void {
    this.store.dispatch(InscriptionActions.loadInscriptions());
    this.store.dispatch(SubscriberActions.loadSubscribers());
    this.store.dispatch(CourseActions.loadCourseById({ id: this.courseId }));
  }

  onDeleteInscription(subscriberId: string) {
    const courseRoute = this.courseId;
    if (courseRoute) {
      this.inscriptions$.subscribe((inscriptions) => {
        const filteredInscriptions = inscriptions.filter(
          (inscription) => inscription.subscriberId === subscriberId
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
