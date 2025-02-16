import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastEditComponent } from './last-edit.component';

describe('LastEditComponent', () => {
  let component: LastEditComponent;
  let fixture: ComponentFixture<LastEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
