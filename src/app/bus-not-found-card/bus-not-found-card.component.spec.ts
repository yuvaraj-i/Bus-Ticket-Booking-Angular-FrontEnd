import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusNotFoundCardComponent } from './bus-not-found-card.component';

describe('BusNotFoundCardComponent', () => {
  let component: BusNotFoundCardComponent;
  let fixture: ComponentFixture<BusNotFoundCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusNotFoundCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusNotFoundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
