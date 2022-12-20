import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A027SampleTimeComponent } from './a027-sample-time.component';

describe('A027SampleTimeComponent', () => {
  let component: A027SampleTimeComponent;
  let fixture: ComponentFixture<A027SampleTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A027SampleTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A027SampleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
