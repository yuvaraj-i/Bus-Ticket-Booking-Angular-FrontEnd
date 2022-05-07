import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusListDisplayPageComponent } from './bus-list-display-page.component';

describe('BusListDisplayPageComponent', () => {
  let component: BusListDisplayPageComponent;
  let fixture: ComponentFixture<BusListDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusListDisplayPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusListDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
