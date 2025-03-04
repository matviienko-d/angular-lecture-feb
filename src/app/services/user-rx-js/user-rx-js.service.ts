import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, Observable, of, Subject, take} from 'rxjs';
import {User} from '../../interfaces/user.interfaces';

@Injectable()
export class UserRxJsService {
  private http = inject(HttpClient);
  currentUser = new Subject<User>();

  constructor() { }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }

  saveCurrentUser(currentUser: User): Observable<User> {
    return of(currentUser).pipe(delay(2000));
  }
}
