import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A034VerbsHttpComponent } from './a034-verbs-http.component';

describe('A034VerbsHttpComponent', () => {
  let component: A034VerbsHttpComponent;
  let fixture: ComponentFixture<A034VerbsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A034VerbsHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A034VerbsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
