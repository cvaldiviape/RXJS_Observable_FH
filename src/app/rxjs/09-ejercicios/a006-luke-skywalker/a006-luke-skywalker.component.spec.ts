import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A006LukeSkywalkerComponent } from './a006-luke-skywalker.component';

describe('A006LukeSkywalkerComponent', () => {
  let component: A006LukeSkywalkerComponent;
  let fixture: ComponentFixture<A006LukeSkywalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A006LukeSkywalkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A006LukeSkywalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
