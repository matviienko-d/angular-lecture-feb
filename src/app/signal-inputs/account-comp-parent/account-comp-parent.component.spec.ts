import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCompParentComponent } from './account-comp-parent.component';

describe('AccountCompParentComponent', () => {
  let component: AccountCompParentComponent;
  let fixture: ComponentFixture<AccountCompParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountCompParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCompParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
