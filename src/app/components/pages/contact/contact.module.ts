import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../shared/shared.module';
import { IconsComponent } from './icons/icons.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [ContactComponent, IconsComponent, ContactFormComponent, MapComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ]
})
export class ContactModule { }
