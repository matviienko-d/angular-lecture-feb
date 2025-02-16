import {ChangeDetectionStrategy, Component, linkedSignal, WritableSignal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {interval, startWith} from 'rxjs';
import {addDays} from 'date-fns';

@Component({
  selector: 'app-account-comp-parent-signal',
  imports: [],
  templateUrl: './account-comp-parent-signal.component.html',
  styleUrl: './account-comp-parent-signal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountCompParentSignalComponent {
  intervalEmitter = toSignal(interval(5000).pipe(startWith(new Date(2025, 1, 3))), {requireSync: true});

  lastEditLinked: WritableSignal<Date> = linkedSignal({
    source: this.intervalEmitter,
    computation: (source, previous): Date => {
      if (!previous?.value) {
        return source as Date;
      }
      return addDays(previous.value as Date, 1)
    }});
}
