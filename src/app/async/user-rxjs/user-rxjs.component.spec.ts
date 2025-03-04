import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRxjsComponent } from './user-rxjs.component';

describe('UserRxjsComponent', () => {
  let component: UserRxjsComponent;
  let fixture: ComponentFixture<UserRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
