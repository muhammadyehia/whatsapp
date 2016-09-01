import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IContact,IContactWithMessages} from './contact'
const URL_CONTACTSWITHLASTMESSAGE = 'api/contacts/contactsWithLastMessage.json';
const URL_CONTACTSWITHMESSAGES = 'api/contacts/contactsWithMessages.json';
@Injectable()
export class ContactService {
    
   Contacts:IContact[];
  constructor(private _http: Http) { }

 
  getContacts() :Promise<IContact[]> {
    return this._http.get(URL_CONTACTSWITHLASTMESSAGE)
      .map((response: Response) => <IContact[]> response.json())
      .toPromise()
      .catch((err: any) => {
        console.log(err); //  customize me please
        return Promise.reject(err);
      });
  }
getContactMessages_RxObservable(id:number): Observable<IContactWithMessages>
{
   return this._http.get(URL_CONTACTSWITHMESSAGES)
      .map((response: Response) =>   (<IContactWithMessages[]> response.json()).filter((value:IContactWithMessages)=>{ return value.contactId==id;})[0])
      .catch(this._handlerError);
}
  getContacts_RxObservable(): Observable<IContact[]> {
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