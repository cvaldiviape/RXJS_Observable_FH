import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A025DebounceTimeComponent } from './a025-debounce-time.component';

describe('A025DebounceTimeComponent', () => {
  let component: A025DebounceTimeComponent;
  let fixture: ComponentFixture<A025DebounceTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A025DebounceTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A025DebounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
