import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A016ScanComponent } from './a016-scan.component';

describe('A016ScanComponent', () => {
  let component: A016ScanComponent;
  let fixture: ComponentFixture<A016ScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A016ScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A016ScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
