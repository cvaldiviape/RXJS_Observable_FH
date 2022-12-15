import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A008AsyncSchedulerComponent } from './a008-async-scheduler.component';

describe('A008AsyncSchedulerComponent', () => {
  let component: A008AsyncSchedulerComponent;
  let fixture: ComponentFixture<A008AsyncSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A008AsyncSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A008AsyncSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
