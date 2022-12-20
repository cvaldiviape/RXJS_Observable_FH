import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A032GetJsonComponent } from './a032-get-json.component';

describe('A032GetJsonComponent', () => {
  let component: A032GetJsonComponent;
  let fixture: ComponentFixture<A032GetJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A032GetJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A032GetJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
