import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { InscriptionEffects } from '../inscriptions/store/inscription.effects';
import { SubscriberEffects } from '../subscribers/store/subscriber.effects';
import { StoreModule } from '@ngrx/store';
import { inscriptionFeature } from '../inscriptions/store/inscription.reducer';
import { subscriberFeature } from '../subscribers/store/subscriber.reducer';
import { productFeature } from './store/product.reducer';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

@NgModule({
  declarations: [ProductsComponent, ProductDialogComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscriptionFeature),
    StoreModule.forFeature(subscriberFeature),
    StoreModule.forFeature(productFeature),
    EffectsModule.forFeature([ProductEffects]),
    EffectsModule.forFeature([InscriptionEffects]),
    EffectsModule.forFeature([SubscriberEffects]),
  ],
})
export class ProductsModule {}
