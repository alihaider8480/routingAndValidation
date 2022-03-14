import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredQuantityComponent } from './delivered-quantity.component';

describe('DeliveredQuantityComponent', () => {
  let component: DeliveredQuantityComponent;
  let fixture: ComponentFixture<DeliveredQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveredQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
