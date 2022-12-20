import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A010MapComponent } from './a010-map.component';

describe('A010MapComponent', () => {
  let component: A010MapComponent;
  let fixture: ComponentFixture<A010MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A010MapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A010MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
