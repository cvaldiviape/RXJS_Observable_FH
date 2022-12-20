import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A021SkipComponent } from './a021-skip.component';

describe('A021SkipComponent', () => {
  let component: A021SkipComponent;
  let fixture: ComponentFixture<A021SkipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A021SkipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A021SkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
