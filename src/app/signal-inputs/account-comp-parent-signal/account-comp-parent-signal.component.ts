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
import {LastEditSignalComponent} from '../last-edit-signal/last-edit-signal.component';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-account-comp-parent-signal',
  imports: [
    MatButton,
    ReactiveFormsModule,
    FormsModule,
    LastEditSignalComponent
  ],
  providers: [UserService],
  templateUrl: './account-comp-parent-signal.component.html',
  styleUrl: './account-comp-parent-signal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountCompParentSignalComponent {
  // last edit for ReadT and WriteT demonstration
  lastEdit = new Date().getTime();
  intervalEmitter = toSignal(interval(1000).pipe(startWith(new Date(2025, 1, 3))), {requireSync: true});
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
  secondSignal = signal(10);
  amountOfSoldProducts = linkedSignal<{selectedUser: number | null, secondSignal: number}, number>({
    source: () => ({
      selectedUser: this.selectedUser(),
      secondSignal: this.secondSignal()
    }),
    computation: ({secondSignal, selectedUser}) => 0
  })

  onSelecteUserChange(event: HTMLSelectElement): void {
    this.selectedUser.set(Number(event.value));
  }
}
