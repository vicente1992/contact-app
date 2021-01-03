import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { MessageService } from 'src/app/services/message.service';
import * as moment from 'moment';


@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],

})
export class CreateContactComponent implements OnInit {
  public contactForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private contactService: ContactService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.contactForm = this.fb.group({
      identificationNumber: ['', Validators.required],
      names: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      birthdayDate: ['', Validators.required],
    })
  }

  public createContact() {

    if (this.contactForm.invalid) {
      this.messageService.error('Todos los campos son obligatorios', 'Error')
      return;
    }

    this.contactService.createContact(this.contactForm.value);
    this.contactForm.reset();
    this.messageService.success('Contacto guardado satisfactoriamente', 'Guardado')
    this.router.navigateByUrl('/contact-list')
  }

  /**
 * viewContact
 */
  public viewContact() {
    this.router.navigateByUrl('/contact-list');
  }
}
