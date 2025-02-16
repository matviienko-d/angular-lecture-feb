import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AccountCompParentComponent} from './signal-inputs/account-comp-parent/account-comp-parent.component';

@Component({
  selector: 'app-root',
  imports: [AccountCompParentComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-lecture-feb';
}
