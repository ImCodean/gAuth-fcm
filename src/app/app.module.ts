import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

const config = {
  apiKey: 'AIzaSyBRttGXo_6AdVuP3sPvejhggao-ftsXO3Q',
  authDomain: 'fireship-auth-fcm.firebaseapp.com',
  databaseURL: 'https://fireship-auth-fcm.firebaseio.com',
  projectId: 'fireship-auth-fcm',
  storageBucket: 'fireship-auth-fcm.appspot.com',
  messagingSenderId: '239400115026',
  appId: '1:239400115026:web:ae8b0743ec9faaafddf88b',
};

@NgModule({
  declarations: [AppComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
