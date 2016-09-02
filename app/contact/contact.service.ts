import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IContact,IContactWithMessages,IMessage} from './contact'
const URL_CONTACTSWITHLASTMESSAGE = 'api/contacts/contactsWithLastMessage.json';
const URL_CONTACTSWITHMESSAGES = 'api/contacts/contactsWithMessages.json';
@Injectable()
export class ContactService {
    
   Contacts:IContact[];
   
   NewMessages:AddedMessages[];
  constructor(private _http: Http) { 
    this.NewMessages=[];
  }

getContactMessages(id:number): Observable<IContactWithMessages>
{
   return this._http.get(URL_CONTACTSWITHMESSAGES)
      .map((response: Response) =>  {
        let result: IContactWithMessages=  (<IContactWithMessages[]> response.json()).filter((value:IContactWithMessages)=>{ return value.contactId==id;})[0];
        if(this.NewMessages)
        {
        this.NewMessages.forEach((item:AddedMessages)=>
        {
         if(item.contactId===id)
         {
           result.messages.push(item.message);
         }
        })
        }
        return result;
    })
      .catch(this._handlerError);
}
  getContacts(): Observable<IContact[]> {    
    return this._http.get(URL_CONTACTSWITHLASTMESSAGE)
      .map((response: Response) => {this.Contacts= <IContact[]> response.json(); return this.Contacts;})
      .catch(this._handlerError);
  }
   getContact(id:number): IContact {  
   return this.Contacts.filter((value:IContact)=>{return value.contactId==id;} )[0];
  }
  
  _handlerError(err: any) {
    console.log(err); // log this somewhere and format the message 
    return Observable.throw(err); // our opportunity customize this error
  }
}

export class AddedMessages {
    contactId: number;
    message:IMessage;

}