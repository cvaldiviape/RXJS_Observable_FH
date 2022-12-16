import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A015ReduceComponent } from './a015-reduce.component';

describe('A015ReduceComponent', () => {
  let component: A015ReduceComponent;
  let fixture: ComponentFixture<A015ReduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A015ReduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A015ReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
