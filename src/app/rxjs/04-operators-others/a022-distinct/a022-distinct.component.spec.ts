import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A022DistinctComponent } from './a022-distinct.component';

describe('A022DistinctComponent', () => {
  let component: A022DistinctComponent;
  let fixture: ComponentFixture<A022DistinctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A022DistinctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A022DistinctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
