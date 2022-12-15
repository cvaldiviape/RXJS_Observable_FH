import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A006RangeComponent } from './a006-range.component';

describe('A006RangeComponent', () => {
  let component: A006RangeComponent;
  let fixture: ComponentFixture<A006RangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A006RangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A006RangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
