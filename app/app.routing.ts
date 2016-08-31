import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contact/index';
import { ChatComponent }  from './chat/chat.component';
const appRoutes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent
  },{ path: 'chat/:id', component: ChatComponent },
   {path: '',redirectTo: 'contacts',pathMatch: 'full'}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
