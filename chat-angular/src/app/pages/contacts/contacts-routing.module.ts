import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactsComponent } from './list-contacts/list-contacts.component';

const routes: Routes = [
  {path: '', component: ListContactsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
