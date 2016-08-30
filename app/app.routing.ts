import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent }      from './contact/index';

const appRoutes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent
  },
   {path: '',redirectTo: 'contacts',pathMatch: 'full'}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
