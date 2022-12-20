import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A019TakeWhileComponent } from './a019-take-while.component';

describe('A019TakeWhileComponent', () => {
  let component: A019TakeWhileComponent;
  let fixture: ComponentFixture<A019TakeWhileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A019TakeWhileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A019TakeWhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
