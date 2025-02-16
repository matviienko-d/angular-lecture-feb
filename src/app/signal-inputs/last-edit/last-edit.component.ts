import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {format} from 'date-fns/format';

@Component({
  selector: 'app-last-edit',
  imports: [],
  templateUrl: './last-edit.component.html',
  standalone: true,
  styleUrl: './last-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastEditComponent implements OnChanges {
  @Input({required: true}) lastEdit!: Date;
  lastEditDisplayValue = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['lastEdit']) {
      this.lastEditDisplayValue = format(this.lastEdit, 'dd MMM yyyy');
      localStorage.setItem('lastEdit', JSON.stringify(changes['lastEdit']));
    }
  }
}
