import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBusPageComponent } from './add-new-bus-page.component';

describe('AddNewBusPageComponent', () => {
  let component: AddNewBusPageComponent;
  let fixture: ComponentFixture<AddNewBusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBusPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
