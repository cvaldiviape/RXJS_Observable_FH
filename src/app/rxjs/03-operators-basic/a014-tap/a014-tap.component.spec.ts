import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A014TapComponent } from './a014-tap.component';

describe('A014TapComponent', () => {
  let component: A014TapComponent;
  let fixture: ComponentFixture<A014TapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A014TapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A014TapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
