import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/Contact.interface';
import { ContactService } from 'src/app/services/contact.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  public contactForm: FormGroup;
  private contact: Contact;
  constructor(
    private router: Router,
    private routerActivated: ActivatedRoute,
    private fb: FormBuilder,
    private contactService: ContactService,
    private messageService: MessageService,
  ) {
    const id = this.routerActivated.snapshot.params.id;
    this.getContact(id);
  }

  ngOnInit(): void {
    this.createForm();

  }

  private createForm() {
    this.contactForm = this.fb.group({
      identificationNumber: [this.contact.identificationNumber, Validators.required],
      names: [this.contact.names, Validators.required],
      phone: [this.contact.phone, Validators.required],
      address: [this.contact.address, Validators.required],
      birthdayDate: [this.contact.birthdayDate, Validators.required],
    })
  }

  private getContact(id: string) {
    this.contact = this.contactService.contactFind(id);
  }

  public updateContact() {
    if (this.contactForm.invalid) {
      this.messageService.error('Todos los campos son obligatorios', 'Error')
      return;
    }

    this.contactService.updateContact(this.contact.id, this.contactForm.value);
    this.contactForm.reset();
    this.messageService.success('Contacto actulizado satisfactoriamente', 'Actualizado')
    this.router.navigateByUrl('/contact-list')
  }
  /**
  * viewContact
  */
  public viewContact() {
    this.router.navigateByUrl('/contact-list');
  }

}
