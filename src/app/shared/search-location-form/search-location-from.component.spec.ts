import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLocationFormComponent } from './search-location-form.component';

describe('SearchLocationComponent', () => {
  let component: SearchLocationFormComponent;
  let fixture: ComponentFixture<SearchLocationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLocationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
