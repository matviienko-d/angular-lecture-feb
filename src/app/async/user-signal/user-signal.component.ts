import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  linkedSignal,
  ResourceStatus,
  signal
} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-user-signal',
  imports: [
    MatCardModule,
    MatButton,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [UserService],
  templateUrl: './user-signal.component.html',
  styleUrl: './user-signal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSignalComponent {
  userService = inject(UserService);
  userId = signal(1)
  currentUser = this.userService.currentUserResource.value;
  isUserLoading = this.userService.currentUserResource.isLoading;
  userAddress = computed(() => {
    const currentUser = this.currentUser();
    return `${currentUser.address.city}, ${currentUser.address.street}, ${currentUser.address.suite}`
  })
  customFieldInput = linkedSignal({
    source: this.currentUser,
    computation: () => ''
  })
  eff = effect(() => {
    console.warn(this.userService.currentUserResource.status())
  });

  handleNextUserClick(): void {
    this.userService.getNextUser();
  }

  addCompanyFieldToUser(): void {
    const additionalInfo = this.currentUser().company.additionalInfo ?? [];
    this.userService.updateUser([...additionalInfo, this.customFieldInput()]);
  }

  resetUserPagination(): void {
    this.userService.reloadUserPagination();
  }

  destroyUserResource(): void {
    this.userService.destroyUserResource();
  }
}
