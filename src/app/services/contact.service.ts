import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact.interface';
import { v4 as uuid } from 'uuid';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public contacts: Contact[];

  constructor() { }

  public getContact() {
    return this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  }
  public createContact(contact: Contact) {
    let contacts = [];
    const newContact = {
      id: uuid(),
      ...contact
    }
    if (localStorage.getItem('contacts') === null) {
      contacts = [];
      contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(contacts));

    } else {

      contacts = JSON.parse(localStorage.getItem('contacts'));
      contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  public deleteContact(id: string) {
    const contacts = this.contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  public contactFind(id: string) {
    return this.contacts.find(contact => contact.id === id);
  }

  public updateContact(id: string, contact: Contact) {
    const contactUpdated = {
      id,
      ...contact
    }
    const contacts = this.contacts.map(contact =>
      contact.id === id ? contactUpdated : contact
    );
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  public getbirthdayDate() {
    let date = moment().format();
    const [currentDate] = date.split('T');
    const contacts = this.contacts.map(contact => {
      return {
        id: contact.id,
        identificationNumber: contact.identificationNumber,
        names: contact.names,
        phone: contact.phone,
        address: contact.address,
        birthdayDate: contact.birthdayDate.split('T')[0],
      }
    }
    );

    return contacts.filter(contact => contact.birthdayDate === currentDate);
  }
}
