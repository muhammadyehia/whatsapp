import { Component } from '@angular/core';
// import { ContactService, ContactsComponent } from './contact';
import { ContactService } from './contact/index';
@Component({
     moduleId: module.id,
    selector: 'whatsapp',
    template: '<router-outlet></router-outlet>',
    providers:[ContactService]
})
export class AppComponent { }
