import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A030FetchComponent } from './a030-fetch.component';

describe('A030FetchComponent', () => {
  let component: A030FetchComponent;
  let fixture: ComponentFixture<A030FetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A030FetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A030FetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
