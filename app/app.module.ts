import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import {  ContactsComponent } from './contact/index';
@NgModule({
  imports: [ BrowserModule,HttpModule,routing ],
  declarations: [ AppComponent,ContactsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
