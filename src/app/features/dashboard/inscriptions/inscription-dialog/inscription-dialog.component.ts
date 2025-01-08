import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inscription } from '../models';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { InscriptionActions } from '../store/inscription.actions';
import { SubscriberActions } from '../../subscribers/store/subscriber.actions';
import { Subscriber } from '../../subscribers/models';

interface InscriptionDialogData {
  inscription?: Inscription;
  subscriber?: Subscriber;
}

@Component({
  selector: 'app-inscription-dialog',
  templateUrl: './inscription-dialog.component.html',
  styleUrl: './inscription-dialog.component.scss',
})
export class InscriptionDialogComponent {
  inscriptionForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<InscriptionDialogData>,
    private formBuilder: FormBuilder,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data?: InscriptionDialogData
  ) {
    this.inscriptionForm = this.formBuilder.group({
      subscriberId: [{ value: '', disabled: true }],
      subscriptionEndDate: [{ value: '', disabled: true }],
      additionalDays: [null, Validators.required],
    });
    this.inscriptionForm.patchValue({
      subscriberId: data?.inscription?.id,
      subscriptionEndDate: data?.subscriber?.subscriptionEndDate,
    });
  }

  get subscriberIdControl() {
    return this.inscriptionForm.get('subscriberId');
  }
  get additionalDaysControl() {
    return this.inscriptionForm.get('additionalDays');
  }
  get endDateControl() {
    return this.inscriptionForm.get('subscriptionEndDate');
  }

  private calculateNewSubscriptionEndDate(additionalDays: number): Date {
    let baseDate = new Date(); // Fecha actual por defecto

    // Usar la fecha de fin actual del suscriptor si está disponible
    if (this.data?.subscriber?.subscriptionEndDate) {
      baseDate = new Date(this.data.subscriber?.subscriptionEndDate);
    }

    // Sumar los días adicionales
    baseDate.setDate(baseDate.getDate() + additionalDays * 30);

    return baseDate;
  }
  onSave(): void {
    if (this.inscriptionForm.invalid) {
      this.inscriptionForm.markAllAsTouched();
    } else {
      const formValues = this.inscriptionForm.getRawValue();
      const subscriberId = formValues.subscriberId;
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

      this.store.dispatch(InscriptionActions.createInscription(formValues));
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
