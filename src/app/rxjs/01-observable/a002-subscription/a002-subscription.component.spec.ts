import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A002SubscriptionComponent } from './a002-subscription.component';

describe('A002SubscriptionComponent', () => {
  let component: A002SubscriptionComponent;
  let fixture: ComponentFixture<A002SubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A002SubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A002SubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
