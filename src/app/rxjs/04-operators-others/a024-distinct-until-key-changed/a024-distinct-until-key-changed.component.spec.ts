import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A024DistinctUntilKeyChangedComponent } from './a024-distinct-until-key-changed.component';

describe('A024DistinctUntilKeyChangedComponent', () => {
  let component: A024DistinctUntilKeyChangedComponent;
  let fixture: ComponentFixture<A024DistinctUntilKeyChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A024DistinctUntilKeyChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A024DistinctUntilKeyChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
