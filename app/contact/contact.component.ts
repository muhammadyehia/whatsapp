import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from './contact'
@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {
    constructor( private router: Router) { }
    @Input() Contact: IContact;
    ngOnInit() { 

    }
    onClick(){
          let link = ['chat',this.Contact.contactId];
          this.router.navigate(link);
    }

}