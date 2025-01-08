import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriberRoutingModule } from './subscribers-routing.module';
import { SubscriberComponent } from './subscribers.component';
import { SharedModule } from '../../../shared/shared.module';
import { SubscriberDialogComponent } from './subscriber-dialog/subscriber-dialog.component';
import { SubscriberDetailComponent } from './subscriber-detail/subscriber-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { SubscriberEffects } from './store/subscriber.effects';
import { StoreModule } from '@ngrx/store';
import { subscriberFeature } from './store/subscriber.reducer';
import { inscriptionFeature } from '../inscriptions/store/inscription.reducer';
import { InscriptionEffects } from '../inscriptions/store/inscription.effects';
import { RenovationDialogComponent } from './renovation-dialog/renovation-dialog.component';


@NgModule({
  declarations: [
    SubscriberComponent,
    SubscriberDialogComponent,
    SubscriberDetailComponent,
    RenovationDialogComponent,
  ],
  imports: [
    CommonModule,
    SubscriberRoutingModule,
    SharedModule,
    StoreModule.forFeature(subscriberFeature),
    EffectsModule.forFeature([SubscriberEffects]),
    StoreModule.forFeature(inscriptionFeature),
    EffectsModule.forFeature([InscriptionEffects]),

  ],
})
export class SubscribersModule {}
