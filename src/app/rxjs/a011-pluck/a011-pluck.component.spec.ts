import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A011PluckComponent } from './a011-pluck.component';

describe('A011PluckComponent', () => {
  let component: A011PluckComponent;
  let fixture: ComponentFixture<A011PluckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A011PluckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A011PluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
