import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A037SwitchMapComponent } from './a037-switch-map.component';

describe('A037SwitchMapComponent', () => {
  let component: A037SwitchMapComponent;
  let fixture: ComponentFixture<A037SwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A037SwitchMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A037SwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
