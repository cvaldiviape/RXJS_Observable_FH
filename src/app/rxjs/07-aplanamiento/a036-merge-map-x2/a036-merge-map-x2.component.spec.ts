import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A036MergeMapX2Component } from './a036-merge-map-x2.component';

describe('A036MergeMapX2Component', () => {
  let component: A036MergeMapX2Component;
  let fixture: ComponentFixture<A036MergeMapX2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A036MergeMapX2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A036MergeMapX2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
