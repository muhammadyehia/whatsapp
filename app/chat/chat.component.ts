import { Component, OnInit } from '@angular/core';
import { Params ,ActivatedRoute } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'app-chat',
    templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit {
  
    constructor( private route: ActivatedRoute) { }
    ngOnInit() { 
    this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    });
}
}
