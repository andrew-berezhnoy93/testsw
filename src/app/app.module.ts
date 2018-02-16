import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDmlg--76FbxpO5CS-NaMgV9XyT7OfCfGA',
      authDomain: 'ngsw-firechat.firebaseapp.com',
      databaseURL: 'https://ngsw-firechat.firebaseio.com',
      projectId: 'ngsw-firechat',
      storageBucket: 'ngsw-firechat.appspot.com',
      messagingSenderId: '602956867256'
    }),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
