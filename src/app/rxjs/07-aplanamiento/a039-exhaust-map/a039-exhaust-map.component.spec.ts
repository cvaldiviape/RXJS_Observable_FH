import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A039ExhaustMapComponent } from './a039-exhaust-map.component';

describe('A039ExhaustMapComponent', () => {
  let component: A039ExhaustMapComponent;
  let fixture: ComponentFixture<A039ExhaustMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A039ExhaustMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A039ExhaustMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
