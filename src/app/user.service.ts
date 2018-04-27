import {Injectable} from '@angular/core';
import {User, users} from './data-model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {
  delayMs = 500;

  constructor() {
  }

  getUser(): Observable<User[]> {
    return of(users).delay(this.delayMs);
  }
  updateUser(user: User) {
    const oldUser = users.find(u => u.id === user.id);
    const newUser = Object.assign(oldUser, user);
    return of(newUser).delay(this.delayMs);
  }
}
