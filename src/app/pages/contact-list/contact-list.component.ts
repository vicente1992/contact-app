import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/Contact.interface';
import { ContactService } from 'src/app/services/contact.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[];
  constructor(
    private router: Router,
    private contactService: ContactService,
    private messageService: MessageService,

  ) {

  }

  ngOnInit(): void {
    this.getContacts();
  }

  private getContacts() {
    this.contacts = this.contactService.getContact();
  }

  public deleteContact(id: string) {
    this.contactService.deleteContact(id);
    this.getContacts();
    this.messageService.success('Contacto eliminado satisfactoriamente', 'Eliminado')
  }

  public updateContact(id: string) {
    this.router.navigate(['update-contact', id]);
  }
  /**
 * viewCreateContact
 */
  public viewCreateContact() {
    this.router.navigateByUrl('create-contact');
  }

}
