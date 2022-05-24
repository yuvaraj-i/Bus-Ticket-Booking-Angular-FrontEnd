import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusPageComponent } from './view-bus-page.component';

describe('ViewBusPageComponent', () => {
  let component: ViewBusPageComponent;
  let fixture: ComponentFixture<ViewBusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBusPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
