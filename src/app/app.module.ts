import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A001ObservableComponent } from './rxjs/a001-observable/a001-observable.component';
import { A002SubscriptionComponent } from './rxjs/a002-subscription/a002-subscription.component';
import { A003SubjectComponent } from './rxjs/a003-subject/a003-subject.component';
import { A004OfComponent } from './rxjs/a004-of/a004-of.component';
import { A005FromEventComponent } from './rxjs/a005-from-event/a005-from-event.component';
import { A006RangeComponent } from './rxjs/a006-range/a006-range.component';
import { A007IntervalTimerComponent } from './rxjs/a007-interval-timer/a007-interval-timer.component';
import { A008AsyncSchedulerComponent } from './rxjs/a008-async-scheduler/a008-async-scheduler.component';
import { A009OfFromComponent } from './rxjs/a009-of-from/a009-of-from.component';
import { A010MapComponent } from './rxjs/a010-map/a010-map.component';
import { A011PluckComponent } from './rxjs/a011-pluck/a011-pluck.component';
import { A012MapToComponent } from './rxjs/a012-map-to/a012-map-to.component';
import { A013FilterComponent } from './rxjs/a013-filter/a013-filter.component';
import { A014TapComponent } from './rxjs/a014-tap/a014-tap.component';
import { A015ReduceComponent } from './rxjs/a015-reduce/a015-reduce.component';

@NgModule({
  declarations: [
    AppComponent,
    A001ObservableComponent,
    A002SubscriptionComponent,
    A003SubjectComponent,
    A004OfComponent,
    A005FromEventComponent,
    A006RangeComponent,
    A007IntervalTimerComponent,
    A008AsyncSchedulerComponent,
    A009OfFromComponent,
    A010MapComponent,
    A011PluckComponent,
    A012MapToComponent,
    A013FilterComponent,
    A014TapComponent,
    A015ReduceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
