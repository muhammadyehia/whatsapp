import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from './contact'
import { TruncatePipe } from '../shared/truncate.pipe'
@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls:['contact.component.css'],
    pipes:[TruncatePipe]

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