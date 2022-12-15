import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A007IntervalTimerComponent } from './a007-interval-timer.component';

describe('A007IntervalTimerComponent', () => {
  let component: A007IntervalTimerComponent;
  let fixture: ComponentFixture<A007IntervalTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A007IntervalTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A007IntervalTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
