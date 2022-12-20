import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A001ObservableComponent } from './a001-observable.component';

describe('A001ObservableComponent', () => {
  let component: A001ObservableComponent;
  let fixture: ComponentFixture<A001ObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A001ObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A001ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
