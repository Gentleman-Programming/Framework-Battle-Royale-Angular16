import { Injectable, signal } from '@angular/core';
import { User } from '../models';

export const EmptyUserState: User = {
  name: '',
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userFormState = signal(EmptyUserState);

  getUserFormState() {
    return this.userFormState;
  }

  setUserFormState(user: User) {
    this.userFormState.set(user);
  }
}
