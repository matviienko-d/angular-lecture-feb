import {inject, Injectable, resource, ResourceRef, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, of, take} from 'rxjs';
import {User} from '../../interfaces/user.interfaces';
// TODO: create effect to track status of resource
@Injectable()
export class UserService {
  private userId = signal<number>(1)
  // TODO: show resource on interval example
  private userResource: ResourceRef<User> = resource({
    request: () => ({userId: this.userId()}),
    loader: ({ request }) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${request.userId}`).then((resp) => resp.json())
    }
  })
  currentUserResource = this.userResource.asReadonly();

  updateUser(additionalInfo: string[]): void {
    this.userResource.value.update((user) => ({...user, company: { ...user.company, additionalInfo }, }));
    this.saveCurrentUser();
  }

  getNextUser(): void {
    this.userId.update((userId) => userId + 1);
  }

  private saveCurrentUser() {
    of({}).pipe(delay(2000), take(1)).subscribe();
  }

  reloadUserPagination(): void {
    this.userResource.reload();
  }

  destroyUserResource(): void {
    this.userResource.destroy();
  }
}
