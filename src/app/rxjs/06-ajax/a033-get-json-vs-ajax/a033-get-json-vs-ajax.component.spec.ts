import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A033GetJsonVsAjaxComponent } from './a033-get-json-vs-ajax.component';

describe('A033GetJsonVsAjaxComponent', () => {
  let component: A033GetJsonVsAjaxComponent;
  let fixture: ComponentFixture<A033GetJsonVsAjaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A033GetJsonVsAjaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A033GetJsonVsAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
