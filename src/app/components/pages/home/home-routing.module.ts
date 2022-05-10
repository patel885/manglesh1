import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LocationComponent } from './location/location.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [{ path: '', component: LocationComponent },
{path:':location/home', component:HomeComponent},
{path:':location/attractions', component:ServicesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
