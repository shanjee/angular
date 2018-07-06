import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Router} from "@angular/router";

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'My first angular firebase';
  description = 'Angular5-Firebase Demo';
 
  itemValue = '';
  itemKey = ''; // for keeping the key of the selected user
  
  items: Observable<any[]>;  
  users: Observable<any[]>;  
     
 
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();   

    this.users = db.list('items').snapshotChanges().map(
      changes => {return changes.map(c => ({key : c.payload.key, ...c.payload.val()}))});   
   
  }
 
  onSubmit() {
    this.db.list('/items').push({ content: this.itemValue });
    this.itemValue = '';
  }

  DeleteUser(obj) {
    // this.itemValue = 'Hello ' + obj.content + ' greeting from angular - firebase';
    // this.db.list('/items').remove(obj.key);
     this.db.list('items').remove(obj.key);
  }

  UpdateUser(){
    //this.itemValue = obj.content;
    this.db.list('items').update(this.itemKey, { content: this.itemValue });
    
  }

  EditUser(obj){
    this.itemValue = obj.content;
    this.itemKey = obj.key;
  }
  
}