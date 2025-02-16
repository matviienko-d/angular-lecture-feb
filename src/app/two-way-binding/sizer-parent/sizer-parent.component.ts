import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SizerComponentComponent} from '../sizer-component/sizer-component.component';
import {SizerSignalComponent} from '../sizer-signal/sizer-signal.component';

@Component({
  selector: 'app-sizer-parent',
  imports: [SizerComponentComponent, SizerSignalComponent],
  templateUrl: './sizer-parent.component.html',
  styleUrl: './sizer-parent.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizerParentComponent {
  // signal works even without model function
  fontSizePx = 16;
}
