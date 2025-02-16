import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastEditSignalComponent } from './last-edit-signal.component';

describe('LastEditSignalComponent', () => {
  let component: LastEditSignalComponent;
  let fixture: ComponentFixture<LastEditSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastEditSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastEditSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
