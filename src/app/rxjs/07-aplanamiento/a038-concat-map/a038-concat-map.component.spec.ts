import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A038ConcatMapComponent } from './a038-concat-map.component';

describe('A038ConcatMapComponent', () => {
  let component: A038ConcatMapComponent;
  let fixture: ComponentFixture<A038ConcatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A038ConcatMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A038ConcatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
