import { ContactsModule } from './pages/contacts/contacts.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './pages/login/login.module';


const routes: Routes = [
  {path:'', loadChildren: () => LoginModule},
  {path: 'contacts', loadChildren: () => ContactsModule}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
