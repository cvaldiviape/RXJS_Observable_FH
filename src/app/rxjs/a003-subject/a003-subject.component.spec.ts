import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A003SubjectComponent } from './a003-subject.component';

describe('A003SubjectComponent', () => {
  let component: A003SubjectComponent;
  let fixture: ComponentFixture<A003SubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A003SubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A003SubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
