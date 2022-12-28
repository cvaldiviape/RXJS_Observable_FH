import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A003RandomComponent } from './a003-random.component';

describe('A003RandomComponent', () => {
  let component: A003RandomComponent;
  let fixture: ComponentFixture<A003RandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A003RandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A003RandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
