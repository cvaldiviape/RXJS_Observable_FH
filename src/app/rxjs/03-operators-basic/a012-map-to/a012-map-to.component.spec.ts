import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A012MapToComponent } from './a012-map-to.component';

describe('A012MapToComponent', () => {
  let component: A012MapToComponent;
  let fixture: ComponentFixture<A012MapToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A012MapToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A012MapToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
