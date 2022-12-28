import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A044CombineLatestComponent } from './a044-combine-latest.component';

describe('A044CombineLatestComponent', () => {
  let component: A044CombineLatestComponent;
  let fixture: ComponentFixture<A044CombineLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A044CombineLatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A044CombineLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
