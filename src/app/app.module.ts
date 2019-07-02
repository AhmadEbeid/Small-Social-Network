import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { ReversePipe } from './pip';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBTTK-qji3d-w2HZ-HVzRaOvWB9uKKzLYU',
      authDomain: 'social-network-task.firebaseapp.com',
      databaseURL: 'https://social-network-task.firebaseio.com',
      projectId: 'social-network-task',
      storageBucket: '',
      messagingSenderId: '355077076038',
      appId: '1:355077076038:web:2624204340f93e6f'
    }),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
