import {ChangeDetectionStrategy, Component, effect, OnInit, viewChild, viewChildren} from '@angular/core';
import {SizerComponentComponent} from '../sizer-component/sizer-component.component';
import {SizerSignalComponent} from '../sizer-signal/sizer-signal.component';

@Component({
  selector: 'app-sizer-parent-signal',
  imports: [
    SizerSignalComponent
  ],
  templateUrl: './sizer-parent-signal.component.html',
  styleUrl: './sizer-parent-signal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizerParentSignalComponent implements OnInit {
  // TODO: signal works even without model function
  fontSizePx = 16;
  // @ViewChild(SizerComponentComponent, { static: true }) sizerComponent!: SizerComponentComponent;
  sizerComponent = viewChildren(SizerSignalComponent);

  eff = effect(() => {
    this.sizerComponent().forEach((sizer) => {
      console.warn(sizer.text)
    });
  })

  ngOnInit(): void {
    // TODO: best scenario is type error or debug undefined
    // console.warn(this.sizerComponent?.text)
  }
}
