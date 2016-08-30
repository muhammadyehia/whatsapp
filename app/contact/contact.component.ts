import { Component,Input, OnInit } from '@angular/core';
import { IContact } from './contact'
@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {
    constructor() { }
    @Input() Contact: IContact;
    ngOnInit() { 

    }

}