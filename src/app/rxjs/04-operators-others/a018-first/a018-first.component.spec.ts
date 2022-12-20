import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A018FirstComponent } from './a018-first.component';

describe('A018FirstComponent', () => {
  let component: A018FirstComponent;
  let fixture: ComponentFixture<A018FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A018FirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A018FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
