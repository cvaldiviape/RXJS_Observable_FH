import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A017TakeComponent } from './a017-take.component';

describe('A017TakeComponent', () => {
  let component: A017TakeComponent;
  let fixture: ComponentFixture<A017TakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A017TakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A017TakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
