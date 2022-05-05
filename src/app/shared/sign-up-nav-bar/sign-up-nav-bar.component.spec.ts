import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpNavBarComponent } from './sign-up-nav-bar.component';

describe('NavBarComponent', () => {
  let component: SignUpNavBarComponent;
  let fixture: ComponentFixture<SignUpNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
