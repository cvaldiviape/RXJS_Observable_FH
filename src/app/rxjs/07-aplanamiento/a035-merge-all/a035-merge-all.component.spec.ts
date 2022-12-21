import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A035MergeAllComponent } from './a035-merge-all.component';

describe('A035MergeAllComponent', () => {
  let component: A035MergeAllComponent;
  let fixture: ComponentFixture<A035MergeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A035MergeAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A035MergeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
