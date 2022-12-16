import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A013FilterComponent } from './a013-filter.component';

describe('A013FilterComponent', () => {
  let component: A013FilterComponent;
  let fixture: ComponentFixture<A013FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A013FilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A013FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
