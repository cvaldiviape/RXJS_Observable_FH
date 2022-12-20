import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A029AuditTimeComponent } from './a029-audit-time.component';

describe('A029AuditTimeComponent', () => {
  let component: A029AuditTimeComponent;
  let fixture: ComponentFixture<A029AuditTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A029AuditTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A029AuditTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
