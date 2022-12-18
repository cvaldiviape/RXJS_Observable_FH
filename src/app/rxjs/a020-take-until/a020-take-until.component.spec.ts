import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A020TakeUntilComponent } from './a020-take-until.component';

describe('A020TakeUntilComponent', () => {
  let component: A020TakeUntilComponent;
  let fixture: ComponentFixture<A020TakeUntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A020TakeUntilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A020TakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
