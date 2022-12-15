import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A005FromEventComponent } from './a005-from-event.component';

describe('A005FromEventComponent', () => {
  let component: A005FromEventComponent;
  let fixture: ComponentFixture<A005FromEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A005FromEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A005FromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
