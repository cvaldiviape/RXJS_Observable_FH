import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A005CombinarComponent } from './a005-combinar.component';

describe('A005CombinarComponent', () => {
  let component: A005CombinarComponent;
  let fixture: ComponentFixture<A005CombinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A005CombinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A005CombinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
