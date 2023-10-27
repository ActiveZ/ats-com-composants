import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientCounterComponent } from './ingredient-counter.component';

describe('IngredientCounterComponent', () => {
  let component: IngredientCounterComponent;
  let fixture: ComponentFixture<IngredientCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
