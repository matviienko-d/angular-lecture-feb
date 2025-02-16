import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sizer-component',
  imports: [],
  templateUrl: './sizer-component.component.html',
  styleUrl: './sizer-component.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizerComponentComponent {
  @Input({ required: true }) size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(20, Math.max(12, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
