import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberDetailComponent } from './subscriber-detail/subscriber-detail.component';
import { SubscriberComponent } from './subscribers.component';


const routes: Routes = [
  {
    path: '',
    component: SubscriberComponent,
  },
  {
    path: ':id/detail',
    component: SubscriberDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriberRoutingModule {}
