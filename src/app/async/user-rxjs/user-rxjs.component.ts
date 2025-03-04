import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {
 MatCardModule,
} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {User} from '../../interfaces/user.interfaces';
import {UserRxJsService} from '../../services/user-rx-js/user-rx-js.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-rxjs',
  imports: [
    MatCardModule,
    MatButton,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [UserRxJsService],
  templateUrl: './user-rxjs.component.html',
  styleUrl: './user-rxjs.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRxjsComponent implements OnInit, OnDestroy {
  private userService = inject(UserRxJsService)
  private cdr = inject(ChangeDetectorRef);

  currentUser!: User;
  isLoading = false;
  customFieldInput = '';
  private userId = 1;
  private subs: Subscription[] = [];

  ngOnInit() {
    this.getUser();
  }

  get userAddress(): string {
    return `${this.currentUser.address.city}, ${this.currentUser.address.street}, ${this.currentUser.address.suite}`
  }

  handleNextUserClick(): void {
    this.userId += 1;
    this.customFieldInput = '';
    this.getUser();
  }

  addCompanyFieldToUser(): void {
    const additionalInfo = this.currentUser.company.additionalInfo ?? [];
    this.currentUser = {
      ...this.currentUser,
      company: {
        ...this.currentUser.company,
        additionalInfo: [...additionalInfo, this.customFieldInput]
      }
    }
    this.customFieldInput = '';
    this.userService.saveCurrentUser(this.currentUser);
  }

  private getUser(): void {
    this.isLoading = true;
    this.subs.push(
      this.userService.getUser(this.userId).subscribe((user: User) => {
        this.currentUser = user;
        this.isLoading = false;
        this.cdr.markForCheck();
      })
    );
  }

  resetUserPagination(): void {
    // this.userService.reloadUserPagination();
  }

  destroyUserResource(): void {
    // this.userService.destroyUserResource();
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {sub.unsubscribe();});
  }
}
