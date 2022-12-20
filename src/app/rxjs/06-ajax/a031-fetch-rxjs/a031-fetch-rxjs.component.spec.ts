import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A031FetchRxjsComponent } from './a031-fetch-rxjs.component';

describe('A031FetchRxjsComponent', () => {
  let component: A031FetchRxjsComponent;
  let fixture: ComponentFixture<A031FetchRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A031FetchRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A031FetchRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
