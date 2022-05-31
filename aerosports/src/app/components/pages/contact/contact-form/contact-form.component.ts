import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../models/contact';
import { NgbDateStruct, NgbCalendar, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/components/services/common.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = new Contact;
  submitted = false;
  error: {} | undefined;
  constructor(private contactService: ContactService,private cs :CommonService, public activeModal: NgbActiveModal) { }
  onSubmit() {

    this.submitted = true; 
    this.model.subject= this.model.eventType+ " " + this.cs.location + " " + this.model.eventDate+ " ";
    this.model.locationEmail= this.cs.locations[0].email;
    return this.contactService.contactForm(this.model).subscribe(
      
      error => this.error = error
      
    );
  }

  ngOnInit(): void {
  }

}
