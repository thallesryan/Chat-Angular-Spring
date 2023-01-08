import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    ListContactsComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
