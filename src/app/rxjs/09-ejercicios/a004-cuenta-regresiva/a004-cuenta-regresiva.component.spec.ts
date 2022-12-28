import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A004CuentaRegresivaComponent } from './a004-cuenta-regresiva.component';

describe('A004CuentaRegresivaComponent', () => {
  let component: A004CuentaRegresivaComponent;
  let fixture: ComponentFixture<A004CuentaRegresivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A004CuentaRegresivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A004CuentaRegresivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
