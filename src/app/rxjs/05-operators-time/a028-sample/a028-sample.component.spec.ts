import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A028SampleComponent } from './a028-sample.component';

describe('A028SampleComponent', () => {
  let component: A028SampleComponent;
  let fixture: ComponentFixture<A028SampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A028SampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A028SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
