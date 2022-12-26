import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A041EndWithComponent } from './a041-end-with.component';

describe('A041EndWithComponent', () => {
  let component: A041EndWithComponent;
  let fixture: ComponentFixture<A041EndWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A041EndWithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A041EndWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
