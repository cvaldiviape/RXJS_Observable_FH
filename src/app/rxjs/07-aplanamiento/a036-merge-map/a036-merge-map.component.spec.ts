import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A036MergeMapComponent } from './a036-merge-map.component';

describe('A036MergeMapComponent', () => {
  let component: A036MergeMapComponent;
  let fixture: ComponentFixture<A036MergeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A036MergeMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A036MergeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
