import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../models/contact';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {

  model = new Contact;
  submitted = false;
  error: {} | undefined;
  constructor(private contactService: ContactService) { }
  onSubmit() {
    this.submitted = true; 
    return this.contactService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }

  ngOnInit(): void {
  }

}
