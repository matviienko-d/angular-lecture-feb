import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, computed,
  DestroyRef,
  effect,
  inject,
  linkedSignal, signal, Signal, WritableSignal
} from '@angular/core';
import {LastEditComponent} from '../last-edit/last-edit.component';
import {LastEditSignalComponent} from '../last-edit-signal/last-edit-signal.component';
import {addDays} from 'date-fns';
import {interval} from 'rxjs';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-account-comp-parent',
  imports: [
    LastEditComponent,
    LastEditSignalComponent,
    FormsModule,
    MatButton,
  ],
  templateUrl: './account-comp-parent.component.html',
  standalone: true,
  styleUrl: './account-comp-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountCompParentComponent {
  lastEdit = new Date(2025, 1, 3);
  private readonly cdr = inject(ChangeDetectorRef);

  constructor() {
    interval(1000)
      .pipe(
        takeUntilDestroyed()
      ).subscribe(() => {
        this.lastEdit = addDays(this.lastEdit, 1);
        this.cdr.markForCheck();
    })
  }
}
