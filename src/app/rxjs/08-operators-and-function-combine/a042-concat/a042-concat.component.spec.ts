import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A042ConcatComponent } from './a042-concat.component';

describe('A042ConcatComponent', () => {
  let component: A042ConcatComponent;
  let fixture: ComponentFixture<A042ConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A042ConcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A042ConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
