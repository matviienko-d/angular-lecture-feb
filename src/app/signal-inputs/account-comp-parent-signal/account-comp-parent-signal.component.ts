import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  linkedSignal,
  signal,
  WritableSignal
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {interval, startWith} from 'rxjs';
import {addDays} from 'date-fns';
import {HttpClient} from '@angular/common/http';
import {MatButton} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-account-comp-parent-signal',
  imports: [
    MatButton,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './account-comp-parent-signal.component.html',
  styleUrl: './account-comp-parent-signal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountCompParentSignalComponent {
  intervalEmitter = toSignal(interval(5000).pipe(startWith(new Date(2025, 1, 3))), {requireSync: true});
  private readonly http = inject(HttpClient);

  lastEditLinked: WritableSignal<Date> = linkedSignal({
    source: this.intervalEmitter,
    computation: (source, previous): Date => {
      if (!previous?.value) {
        return source as Date;
      }
      return addDays(previous.value as Date, 1)
    }});

  users = toSignal(this.http.get<any[]>('https://jsonplaceholder.typicode.com/users'), { initialValue: [] });
  selectedUser = signal<number | null>(null);
  isAmountOfSoldProductsDisabled = computed(() => this.selectedUser() ? false : 'disabled');
  amountOfSoldProducts = linkedSignal({
    source: this.selectedUser,
    computation: (source, previous) => 0
  })

  onSelectedUserChange(event: HTMLSelectElement): void {
    this.selectedUser.set(Number(event.value))
  }
}
