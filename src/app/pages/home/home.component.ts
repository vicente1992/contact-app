import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/Contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public contacts: Contact[];
  public birthdayContact: Contact[];


  constructor(
    private router: Router,
    private contactService: ContactService
  ) {

  }

  ngOnInit(): void {
    this.getContact();
    this.getbirthdayDate();
  }
  private getContact() {
    this.contacts = this.contactService.getContact();
  }

  private getbirthdayDate() {
    this.birthdayContact = this.contactService.getbirthdayDate();

  }



  /**
   * viewContactList
   */
  public viewContactList() {
    this.router.navigateByUrl('contact-list');
  }

}
