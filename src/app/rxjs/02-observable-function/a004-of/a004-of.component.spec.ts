import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A004OfComponent } from './a004-of.component';

describe('A004OfComponent', () => {
  let component: A004OfComponent;
  let fixture: ComponentFixture<A004OfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A004OfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A004OfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
