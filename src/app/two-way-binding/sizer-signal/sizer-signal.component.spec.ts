import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizerSignalComponent } from './sizer-signal.component';

describe('SizerSignalComponent', () => {
  let component: SizerSignalComponent;
  let fixture: ComponentFixture<SizerSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SizerSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizerSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
