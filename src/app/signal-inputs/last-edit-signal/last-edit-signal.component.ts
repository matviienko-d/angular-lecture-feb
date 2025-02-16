import {
  ChangeDetectionStrategy,
  Component, computed, effect, input, SimpleChanges,
} from '@angular/core';
import {format} from 'date-fns/format';

@Component({
  selector: 'app-last-edit-signal',
  imports: [],
  templateUrl: './last-edit-signal.component.html',
  styleUrl: './last-edit-signal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastEditSignalComponent {
  lastEdit = input.required<Date>({alias: 'lastEditSignal'});
  lastEditDisplayValue = computed(() => format(this.lastEdit(), 'dd MMM yyyy'))
  eff = effect(() => {
    localStorage.setItem('lastEdit', JSON.stringify(this.lastEdit()));
  })
}
