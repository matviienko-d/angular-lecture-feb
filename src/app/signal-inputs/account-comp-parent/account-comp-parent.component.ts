import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-account-comp-parent',
  imports: [
    MatButton
  ],
  templateUrl: './account-comp-parent.component.html',
  standalone: true,
  styleUrl: './account-comp-parent.component.scss'
})
export class AccountCompParentComponent {

}
