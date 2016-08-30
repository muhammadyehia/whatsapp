import { Component } from '@angular/core';
import { ContactService, ContactsComponent } from './contact/index';
@Component({
    selector: 'whatsapp',
    template: '<app-contacts></app-contacts>',
    directives:[ContactsComponent],
    providers:[ContactService]
})
export class AppComponent { }
