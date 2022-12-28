import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A002ReduceComponent } from './a002-reduce.component';

describe('A002ReduceComponent', () => {
  let component: A002ReduceComponent;
  let fixture: ComponentFixture<A002ReduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A002ReduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A002ReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
