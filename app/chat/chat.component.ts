import { Component, OnInit } from '@angular/core';
import { Params ,ActivatedRoute } from '@angular/router';
import { ContactService,IContactWithMessages ,IMessage} from '../contact/index';
@Component({
    moduleId: module.id,
    selector: 'app-chat',
    templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit {
    Message:string;
    MyContactWithMessage:ContactWithMessage;
    constructor( private route: ActivatedRoute,private _contactService:ContactService) {

this.MyContactWithMessage=new ContactWithMessage();
     }
    ngOnInit() { 
        
    this.route.params.forEach((params: Params) => {
    let id:number = +params['id'];
    if(id)
    {
    this._contactService.getContactMessages_RxObservable(id).subscribe(
        (myContact:IContactWithMessages)=>
        { 
        this.MyContactWithMessage=myContact;
        },(err) => {console.log(err);});
    }
    });
}
}

class  ContactWithMessage implements IContactWithMessages{
    contactId: number;
    contactName: string;
    Messages:IMessage[];
    imageUrl: string;
}
