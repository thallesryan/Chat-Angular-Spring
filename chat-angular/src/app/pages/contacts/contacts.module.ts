import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ListContactsComponent } from './list-contacts/list-contacts.component';


@NgModule({
  declarations: [
    ListContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
