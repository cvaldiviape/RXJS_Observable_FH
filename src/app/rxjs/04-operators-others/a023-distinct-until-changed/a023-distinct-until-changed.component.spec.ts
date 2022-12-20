import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A023DistinctUntilChangedComponent } from './a023-distinct-until-changed.component';

describe('A023DistinctUntilChangedComponent', () => {
  let component: A023DistinctUntilChangedComponent;
  let fixture: ComponentFixture<A023DistinctUntilChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A023DistinctUntilChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A023DistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
