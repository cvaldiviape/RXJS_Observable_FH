import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A001ObservableComponent } from './rxjs/01-observable/a001-observable/a001-observable.component';
import { A002SubscriptionComponent } from './rxjs/01-observable/a002-subscription/a002-subscription.component';
import { A003SubjectComponent } from './rxjs/01-observable/a003-subject/a003-subject.component';
import { A004OfComponent } from './rxjs/02-observable-function/a004-of/a004-of.component';
import { A005FromEventComponent } from './rxjs/02-observable-function/a005-from-event/a005-from-event.component';
import { A006RangeComponent } from './rxjs/02-observable-function/a006-range/a006-range.component';
import { A007IntervalTimerComponent } from './rxjs/02-observable-function/a007-interval-timer/a007-interval-timer.component';
import { A008AsyncSchedulerComponent } from './rxjs/02-observable-function/a008-async-scheduler/a008-async-scheduler.component';
import { A009OfFromComponent } from './rxjs/02-observable-function/a009-of-from/a009-of-from.component';
import { A010MapComponent } from './rxjs/03-operators-basic/a010-map/a010-map.component';
import { A011PluckComponent } from './rxjs/03-operators-basic/a011-pluck/a011-pluck.component';
import { A012MapToComponent } from './rxjs/03-operators-basic/a012-map-to/a012-map-to.component';
import { A013FilterComponent } from './rxjs/03-operators-basic/a013-filter/a013-filter.component';
import { A014TapComponent } from './rxjs/03-operators-basic/a014-tap/a014-tap.component';
import { A015ReduceComponent } from './rxjs/03-operators-basic/a015-reduce/a015-reduce.component';
import { A016ScanComponent } from './rxjs/03-operators-basic/a016-scan/a016-scan.component';
import { A017TakeComponent } from './rxjs/04-operators-others/a017-take/a017-take.component';
import { A018FirstComponent } from './rxjs/04-operators-others/a018-first/a018-first.component';
import { A019TakeWhileComponent } from './rxjs/04-operators-others/a019-take-while/a019-take-while.component';
import { A020TakeUntilComponent } from './rxjs/04-operators-others/a020-take-until/a020-take-until.component';
import { A021SkipComponent } from './rxjs/04-operators-others/a021-skip/a021-skip.component';
import { A022DistinctComponent } from './rxjs/04-operators-others/a022-distinct/a022-distinct.component';
import { A023DistinctUntilChangedComponent } from './rxjs/04-operators-others/a023-distinct-until-changed/a023-distinct-until-changed.component';
import { A024DistinctUntilKeyChangedComponent } from './rxjs/04-operators-others/a024-distinct-until-key-changed/a024-distinct-until-key-changed.component';
import { A025DebounceTimeComponent } from './rxjs/05-operators-time/a025-debounce-time/a025-debounce-time.component';
import { A026ThrottleTimeComponent } from './rxjs/05-operators-time/a026-throttle-time/a026-throttle-time.component';
import { A027SampleTimeComponent } from './rxjs/05-operators-time/a027-sample-time/a027-sample-time.component';
import { A028SampleComponent } from './rxjs/05-operators-time/a028-sample/a028-sample.component';
import { A029AuditTimeComponent } from './rxjs/05-operators-time/a029-audit-time/a029-audit-time.component';
import { A030FetchComponent } from './rxjs/06-ajax/a030-fetch/a030-fetch.component';

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
    A015ReduceComponent,
    A016ScanComponent,
    A017TakeComponent,
    A018FirstComponent,
    A019TakeWhileComponent,
    A020TakeUntilComponent,
    A021SkipComponent,
    A022DistinctComponent,
    A023DistinctUntilChangedComponent,
    A024DistinctUntilKeyChangedComponent,
    A025DebounceTimeComponent,
    A026ThrottleTimeComponent,
    A027SampleTimeComponent,
    A028SampleComponent,
    A029AuditTimeComponent,
    A030FetchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
