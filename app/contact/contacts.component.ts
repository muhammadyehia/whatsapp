import { Component, OnInit, OnChanges } from '@angular/core';
import {ContactComponent } from './contact.component'
import { ContactService} from './contact.service'
import { IContact} from './contact'
@Component({
    moduleId: module.id,
    selector: 'app-contacts',
    templateUrl: 'contacts.component.html',
    directives: [ContactComponent],
    styleUrls: ['contacts.component.css']
})
export class ContactsComponent implements OnInit {

    constructor(private _contactService: ContactService) {

    }
    Contacts: IContact[];

    ngOnInit() {
               if(!this._contactService.Contacts)
        {
		this._contactService.getContacts()
            .subscribe((contacts: IContact[]) => {
                this.Contacts=contacts;
        }  ,(err) => {console.log(err);});
        }
        else{
            this.Contacts=this._contactService.Contacts;
        }
        }


}
