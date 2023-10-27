import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantSimpleComponent } from './enfant-simple.component';

describe('EnfantSimpleComponent', () => {
  let component: EnfantSimpleComponent;
  let fixture: ComponentFixture<EnfantSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfantSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
