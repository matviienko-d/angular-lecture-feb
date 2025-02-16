import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCompParentSignalComponent } from './account-comp-parent-signal.component';

describe('AccountCompParentSignalComponent', () => {
  let component: AccountCompParentSignalComponent;
  let fixture: ComponentFixture<AccountCompParentSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountCompParentSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCompParentSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
