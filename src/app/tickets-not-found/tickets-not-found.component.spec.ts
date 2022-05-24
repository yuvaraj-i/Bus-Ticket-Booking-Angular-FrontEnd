import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsNotFoundComponent } from './tickets-not-found.component';

describe('TicketsNotFoundComponent', () => {
  let component: TicketsNotFoundComponent;
  let fixture: ComponentFixture<TicketsNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
