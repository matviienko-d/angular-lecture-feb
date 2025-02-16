import {ChangeDetectionStrategy, Component, model} from '@angular/core';

@Component({
  selector: 'app-sizer-signal',
  imports: [],
  templateUrl: './sizer-signal.component.html',
  styleUrl: './sizer-signal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizerSignalComponent {
  size = model.required<number>({ alias: 'fontSize' });

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size.set(Math.min(20, Math.max(12, +this.size() + delta)));
  }
}
