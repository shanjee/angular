import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

 
@Component({
  selector: 'app-root',
  templateUrl: './FindBookPageComponent.html',
  styleUrls: ['./FindBookPageComponent.css']
})

export class FindBookPageComponent {

  title = 'My book page';
  description = 'Angular5-Book page';
 
  itemValue = '';
  itemKey = ''; // for keeping the key of the selected user
  
  books: Observable<any[]>;  
     
  constructor(public db: AngularFireDatabase) { 

    this.books = db.list('Books').snapshotChanges().map(
      changes => {return changes.map(c => ({key : c.payload.key, ...c.payload.val()}))});      
  }  
}