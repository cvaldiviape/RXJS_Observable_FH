import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A001CapitalizarComponent } from './a001-capitalizar.component';

describe('A001CapitalizarComponent', () => {
  let component: A001CapitalizarComponent;
  let fixture: ComponentFixture<A001CapitalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A001CapitalizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A001CapitalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
