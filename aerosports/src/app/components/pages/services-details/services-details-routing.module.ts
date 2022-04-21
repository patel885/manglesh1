import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesDetailsComponent } from './services-details.component';

const routes: Routes = [{ path: '', component: ServicesDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesDetailsRoutingModule { }
