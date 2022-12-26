import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A040StartWithComponent } from './a040-start-with.component';

describe('A040StartWithComponent', () => {
  let component: A040StartWithComponent;
  let fixture: ComponentFixture<A040StartWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A040StartWithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A040StartWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
