import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A043MergeComponent } from './a043-merge.component';

describe('A043MergeComponent', () => {
  let component: A043MergeComponent;
  let fixture: ComponentFixture<A043MergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A043MergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A043MergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
