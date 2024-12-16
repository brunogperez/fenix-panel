import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inscription } from '../models';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Course } from '../../courses/models';
import { InscriptionService } from '../../../../core/services/inscriptions.service';
import { Store } from '@ngrx/store';
import { InscriptionActions } from '../store/inscription.actions';
import { selectCourse } from '../../courses/store/course.selectors';

interface InscriptionDialogData {
  inscription?: Inscription;
}

@Component({
  selector: 'app-inscription-dialog',
  templateUrl: './inscription-dialog.component.html',
  styleUrl: './inscription-dialog.component.scss',
})
export class InscriptionDialogComponent {
  inscriptionForm: FormGroup;
  courses$: Observable<Course[]>;

  constructor(
    private matDialogRef: MatDialogRef<InscriptionDialogData>,
    private formBuilder: FormBuilder,
    private inscriptionService: InscriptionService,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data?: InscriptionDialogData
  ) {
    this.courses$ = this.store.select(selectCourse);
    this.inscriptionForm = this.formBuilder.group({
      subscriberId: [{ value: '', disabled: true }],
      courseId: [null, Validators.required],
    });
    this.inscriptionForm.patchValue({
      subscriberId: data?.inscription?.id,
    });
  }

  get subscriberIdControl() {
    return this.inscriptionForm.get('subscriberId');
  }
  get courseIdControl() {
    return this.inscriptionForm.get('courseId');
  }

  onSave(): void {
    if (this.inscriptionForm.invalid) {
      this.inscriptionForm.markAllAsTouched();
    } else {
      const formValues = this.inscriptionForm.getRawValue();
      const subscriberId = formValues.subscriberId;
      const courseId = formValues.courseId;

      this.inscriptionService
        .isStudentEnrolled(subscriberId, courseId)
        .subscribe((isEnrolled) => {
          if (isEnrolled) {
            Swal.fire(
              'Atención',
              'El alumno ya está inscripto en este curso.',
              'info'
            );
          } else {
            this.store.dispatch(
              InscriptionActions.createInscription({
                subscriberId,
                courseId,
              })
            );
            Swal.fire(
              'Buen trabajo!',
              'El alumno ha sido inscripto exitosamente.',
              'success'
            ).then(() => {
              this.matDialogRef.close();
            });
          }
        });
    }
  }
}
