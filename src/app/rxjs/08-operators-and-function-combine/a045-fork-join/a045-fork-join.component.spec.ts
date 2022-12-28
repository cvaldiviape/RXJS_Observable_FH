import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A045ForkJoinComponent } from './a045-fork-join.component';

describe('A045ForkJoinComponent', () => {
  let component: A045ForkJoinComponent;
  let fixture: ComponentFixture<A045ForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A045ForkJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A045ForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
