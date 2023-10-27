import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantCounterComponent } from './enfant-counter.component';

describe('EnfantCounterComponent', () => {
  let component: EnfantCounterComponent;
  let fixture: ComponentFixture<EnfantCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfantCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
