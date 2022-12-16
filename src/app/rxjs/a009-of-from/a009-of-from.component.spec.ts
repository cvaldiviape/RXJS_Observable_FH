import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A009OfFromComponent } from './a009-of-from.component';

describe('A009OfFromComponent', () => {
  let component: A009OfFromComponent;
  let fixture: ComponentFixture<A009OfFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A009OfFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A009OfFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
