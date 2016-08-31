import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IContact} from './contact'
const URL_CONTACT = 'api/contacts/contactsWithLastMessage.json';
@Injectable()
export class ContactService {
    
   
  constructor(private _http: Http) { }

 
  getContacts() :Promise<IContact[]> {
    return this._http.get(URL_CONTACT)
      .map((response: Response) => <IContact[]> response.json())
      .toPromise()
      .catch((err: any) => {
        console.log(err); //  customize me please
        return Promise.reject(err);
      });
  }

  getContacts_RxObservable(): Observable<IContact[]> {
    return this._http.get(URL_CONTACT)
      .map((response: Response) => <IContact[]> response.json())
      .catch(this._handlerError);
  }

  _handlerError(err: any) {
    console.log(err); // log this somewhere and format the message 
    return Observable.throw(err); // our opportunity customize this error
  }
}