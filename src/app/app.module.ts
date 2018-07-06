import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// define my new components
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FindBookPageComponent } from './containers/FindBookPageComponent';


import { AlertModule } from 'ngx-bootstrap'; 
 
@NgModule({
  declarations: [
    AppComponent,
    FindBookPageComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }