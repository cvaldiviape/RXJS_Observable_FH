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
import { A031FetchRxjsComponent } from './rxjs/06-ajax/a031-fetch-rxjs/a031-fetch-rxjs.component';
import { A032GetJsonComponent } from './rxjs/06-ajax/a032-get-json/a032-get-json.component';
import { A033GetJsonVsAjaxComponent } from './rxjs/06-ajax/a033-get-json-vs-ajax/a033-get-json-vs-ajax.component';
import { A034VerbsHttpComponent } from './rxjs/06-ajax/a034-verbs-http/a034-verbs-http.component';
import { A035MergeAllComponent } from './rxjs/07-aplanamiento/a035-merge-all/a035-merge-all.component';
import { A036MergeMapComponent } from './rxjs/07-aplanamiento/a036-merge-map/a036-merge-map.component';
import { A036MergeMapX2Component } from './rxjs/07-aplanamiento/a036-merge-map-x2/a036-merge-map-x2.component';
import { A037SwitchMapComponent } from './rxjs/07-aplanamiento/a037-switch-map/a037-switch-map.component';
import { A038ConcatMapComponent } from './rxjs/07-aplanamiento/a038-concat-map/a038-concat-map.component';
import { A039ExhaustMapComponent } from './rxjs/07-aplanamiento/a039-exhaust-map/a039-exhaust-map.component';
import { A040StartWithComponent } from './rxjs/08-operators-and-function-combine/a040-start-with/a040-start-with.component';
import { A041EndWithComponent } from './rxjs/08-operators-and-function-combine/a041-end-with/a041-end-with.component';
import { A042ConcatComponent } from './rxjs/08-operators-and-function-combine/a042-concat/a042-concat.component';
import { A043MergeComponent } from './rxjs/08-operators-and-function-combine/a043-merge/a043-merge.component';
import { A044CombineLatestComponent } from './rxjs/08-operators-and-function-combine/a044-combine-latest/a044-combine-latest.component';
import { A045ForkJoinComponent } from './rxjs/08-operators-and-function-combine/a045-fork-join/a045-fork-join.component';
import { A001CapitalizarComponent } from './rxjs/09-ejercicios/a001-capitalizar/a001-capitalizar.component';
import { A002ReduceComponent } from './rxjs/09-ejercicios/a002-reduce/a002-reduce.component';
import { A003RandomComponent } from './rxjs/09-ejercicios/a003-random/a003-random.component';
import { A004CuentaRegresivaComponent } from './rxjs/09-ejercicios/a004-cuenta-regresiva/a004-cuenta-regresiva.component';
import { A005CombinarComponent } from './rxjs/09-ejercicios/a005-combinar/a005-combinar.component';
import { A006LukeSkywalkerComponent } from './rxjs/09-ejercicios/a006-luke-skywalker/a006-luke-skywalker.component';

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
    A031FetchRxjsComponent,
    A032GetJsonComponent,
    A033GetJsonVsAjaxComponent,
    A034VerbsHttpComponent,
    A035MergeAllComponent,
    A036MergeMapComponent,
    A036MergeMapX2Component,
    A037SwitchMapComponent,
    A038ConcatMapComponent,
    A039ExhaustMapComponent,
    A040StartWithComponent,
    A041EndWithComponent,
    A042ConcatComponent,
    A043MergeComponent,
    A044CombineLatestComponent,
    A045ForkJoinComponent,
    A001CapitalizarComponent,
    A002ReduceComponent,
    A003RandomComponent,
    A004CuentaRegresivaComponent,
    A005CombinarComponent,
    A006LukeSkywalkerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
