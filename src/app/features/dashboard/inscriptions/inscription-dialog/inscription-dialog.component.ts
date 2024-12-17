import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inscription } from '../models';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { InscriptionService } from '../../../../core/services/inscriptions.service';
import { Store } from '@ngrx/store';
import { InscriptionActions } from '../store/inscription.actions';
import { selectProduct } from '../../products/store/product.selectors';
import { Product } from '../../products/models';

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
  products$: Observable<Product[]>;

  constructor(
    private matDialogRef: MatDialogRef<InscriptionDialogData>,
    private formBuilder: FormBuilder,
    private inscriptionService: InscriptionService,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data?: InscriptionDialogData
  ) {
    this.products$ = this.store.select(selectProduct);
    this.inscriptionForm = this.formBuilder.group({
      subscriberId: [{ value: '', disabled: true }],
      productId: [null, Validators.required],
    });
    this.inscriptionForm.patchValue({
      subscriberId: data?.inscription?.id,
    });
  }

  get subscriberIdControl() {
    return this.inscriptionForm.get('subscriberId');
  }
  get productIdControl() {
    return this.inscriptionForm.get('productId');
  }

  onSave(): void {
    if (this.inscriptionForm.invalid) {
      this.inscriptionForm.markAllAsTouched();
    } else {
      const formValues = this.inscriptionForm.getRawValue();
      const subscriberId = formValues.subscriberId;
      const productId = formValues.productId;

      this.inscriptionService
        .isStudentEnrolled(subscriberId, productId)
        .subscribe((isEnrolled) => {
          if (isEnrolled) {
            Swal.fire(
              'Atención',
              'El alumno ya está suscripto.',
              'info'
            );
          } else {
            this.store.dispatch(
              InscriptionActions.createInscription({
                subscriberId,
                productId,
              })
            );
            Swal.fire(
              'Buen trabajo!',
              'El alumno ha sido suscripto exitosamente.',
              'success'
            ).then(() => {
              this.matDialogRef.close();
            });
          }
        });
    }
  }
}
