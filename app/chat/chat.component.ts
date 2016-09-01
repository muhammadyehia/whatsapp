import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ContactService, IContactWithMessages, IMessage, IContact} from '../contact/index';
@Component({
    moduleId: module.id,
    selector: 'app-chat',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {
    Message: string;
    MyId: number;
    MyImage: string;
    MyName: string;
    MyContactWithMessage: ContactWithMessage;
    constructor(private route: ActivatedRoute, private _contactService: ContactService, private router: Router) {

        this.MyContactWithMessage = new ContactWithMessage();
        this.MyId = 0;
        this.MyImage = "http://placehold.it/50/FA6F57/fff&amp;text=ME";
        this.MyName = "Muhammad Yehia";
    }
    ngOnInit() {
        if (!this._contactService.Contacts) {
            let link = ['contacts'];
            this.router.navigate(link);
        }

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this._contactService.getContactMessages_RxObservable(id).subscribe(
                    (myContact: IContactWithMessages) => {
                        this.MyContactWithMessage = myContact;
                        this.MyContactWithMessage.messages.map((value: IMessage) => {
                            let contact: IContact;
                            contact = this._contactService.Contacts.filter((item: IContact) => {
                                return item.contactId === id;
                            })[0];
                            if (contact.contactId === value.contactId) {
                                value.imageUrl = contact.imageUrl;
                                value.contactName = contact.contactName;
                            }
                            else if (this.MyId === value.contactId) {
                                value.imageUrl = this.MyImage;
                                value.contactName = this.MyName;
                            }
                        });
                    }, (err) => { console.log(err); });
            }
        });
    }
}

class ContactWithMessage implements IContactWithMessages {
    contactId: number;
    messages: IMessage[];

}
