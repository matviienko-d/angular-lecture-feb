import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizerParentSignalComponent } from './sizer-parent-signal.component';

describe('SizerParentSignalComponent', () => {
  let component: SizerParentSignalComponent;
  let fixture: ComponentFixture<SizerParentSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SizerParentSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizerParentSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
