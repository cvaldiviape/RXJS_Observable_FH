import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A026ThrottleTimeComponent } from './a026-throttle-time.component';

describe('A026ThrottleTimeComponent', () => {
  let component: A026ThrottleTimeComponent;
  let fixture: ComponentFixture<A026ThrottleTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A026ThrottleTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A026ThrottleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
