import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOvenComponent } from './pizza-oven.component';

describe('PizzaOvenComponent', () => {
  let component: PizzaOvenComponent;
  let fixture: ComponentFixture<PizzaOvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaOvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
