import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocationFormComponent } from './add-location-form.component';

describe('AddLocationFormComponent', () => {
  let component: AddLocationFormComponent;
  let fixture: ComponentFixture<AddLocationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLocationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
