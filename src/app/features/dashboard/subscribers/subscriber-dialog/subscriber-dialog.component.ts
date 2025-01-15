import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';
import { Subscriber } from '../models';
import { nameValidator } from '../../../../shared/utils/custom-validators';
import Swal from 'sweetalert2';

interface SubscriberDialogData {
  editSubscriber?: Subscriber;
}

@Component({
  selector: 'app-subscriber-dialog',
  templateUrl: './subscriber-dialog.component.html',
  styleUrl: './subscriber-dialog.component.scss',
})
export class SubscriberDialogComponent {
  subscriberForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<SubscriberDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: SubscriberDialogData
  ) {
    this.subscriberForm = this.formBuilder.group({
      firstName: [null, [nameValidator]],
      lastName: [null, [nameValidator]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
    this.patchForm();
  }

  get firstNameControl() {
    return this.subscriberForm.get('firstName');
  }
  get lastNameControl() {
    return this.subscriberForm.get('lastName');
  }
  get emailControl() {
    return this.subscriberForm.get('email');
  }

  private get isEditing() {
    return !!this.data?.editSubscriber;
  }

  patchForm() {
    if (this.data?.editSubscriber) {
      this.subscriberForm.patchValue(this.data.editSubscriber);
    }
  }

  onSave(): void {
    if (this.subscriberForm.invalid) {
      this.subscriberForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.subscriberForm.value,
        createdAt: this.isEditing
          ? this.data!.editSubscriber!.createdAt
          : new Date(),
        subscriptionEndDate: this.isEditing
          ? this.data!.editSubscriber!.subscriptionEndDate
          : new Date(),
      });
      Swal.fire(
        'Buen trabajo!',
        `El suscriptor ha sido ${
          this.isEditing ? 'editado' : 'creado'
        } exitosamente.`,
        'success'
      );
    }
  }
}
