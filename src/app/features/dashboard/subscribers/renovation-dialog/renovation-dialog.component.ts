import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';
import { Subscriber } from '../models';
import { nameValidator } from '../../../../shared/utils/custom-validators';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { SubscriberActions } from '../store/subscriber.actions';

interface SubscriberDialogData {
  editSubscriber?: Subscriber;
}

@Component({
  selector: 'app-renovation-dialog',
  templateUrl: './renovation-dialog.component.html',
  styleUrl: './renovation-dialog.component.scss',
})
export class RenovationDialogComponent {
  renovationForm: FormGroup;
  subscriptionEndDate: string | undefined;
  constructor(
    private matDialogRef: MatDialogRef<RenovationDialogComponent>,
    private formBuilder: FormBuilder,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data?: SubscriberDialogData
  ) {
    this.renovationForm = this.formBuilder.group({
      firstName: [{ value: '', disabled: true }],
      lastName: [{ value: '', disabled: true }],
      subscriptionEndDate: [{ value: '', disabled: true }],
      additionalDays: [null, Validators.required],
    });

    this.patchForm();
  }

  get firstNameControl() {
    return this.renovationForm.get('firstName');
  }
  get lastNameControl() {
    return this.renovationForm.get('lastName');
  }
  get additionalDaysControl() {
    return this.renovationForm.get('additionalDays');
  }
  get endDateControl() {
    return this.renovationForm.get('subscriptionEndDate');
  }

  private get isEditing() {
    return !!this.data?.editSubscriber;
  }

  patchForm() {
    if (this.data?.editSubscriber) {
      this.renovationForm.patchValue(this.data.editSubscriber);
      this.renovationForm.patchValue({
        subscriptionEndDate: new Date(
          this.data.editSubscriber.subscriptionEndDate
        ),
      });
    }
  }

  updateDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input?.value; // Obtén el valor del input
    if (value) {
      this.subscriptionEndDate = value;
      this.renovationForm.get('subscriptionEndDate')?.setValue(value);
    }
  }


  private calculateNewSubscriptionEndDate(additionalDays: number): Date {
    let baseDate = new Date(); 

    
    if (this.endDateControl?.value) {
      baseDate = new Date(this.endDateControl?.value);
    }

    baseDate.setDate(baseDate.getDate() + additionalDays * 30);

    return baseDate;
  }

  onSave(): void {
    if (this.renovationForm.invalid) {
      this.renovationForm.markAllAsTouched();
    } else {
      const formValues = this.renovationForm.getRawValue();
      const subscriberId = this.data?.editSubscriber?._id || '';
      const additionalDays = formValues.additionalDays;

      // Calcular la nueva fecha de suscripción con los días adicionales
      const newSubscriptionEndDate =
        this.calculateNewSubscriptionEndDate(additionalDays);

      // Actualizar la fecha de suscripción del suscriptor en el store
      this.store.dispatch(
        SubscriberActions.updateSubscriptionEndDate({
          subscriberId,
          subscriptionEndDate: newSubscriptionEndDate.toISOString(),
        })
      );
      Swal.fire(
        'Buen trabajo!',
        'Proceso de inscripción completado exitosamente.',
        'success'
      ).then(() => {
        this.matDialogRef.close();
      });
    }
  }
}
