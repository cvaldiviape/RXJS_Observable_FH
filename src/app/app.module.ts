import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A001ObservableComponent } from './rxjs/a001-observable/a001-observable.component';
import { A002SubscriptionComponent } from './rxjs/a002-subscription/a002-subscription.component';
import { A003SubjectComponent } from './rxjs/a003-subject/a003-subject.component';
import { A004OfComponent } from './rxjs/a004-of/a004-of.component';
import { A005FromEventComponent } from './rxjs/a005-from-event/a005-from-event.component';

@NgModule({
  declarations: [
    AppComponent,
    A001ObservableComponent,
    A002SubscriptionComponent,
    A003SubjectComponent,
    A004OfComponent,
    A005FromEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
