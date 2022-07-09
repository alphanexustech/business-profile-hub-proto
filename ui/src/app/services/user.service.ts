import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: any; // IDEA: Make a class/interface for the user data

  updateUserData(userData) {
    console.log(userData)
    this.userData = userData;
  }

  getUserData(): Observable<any> {
    const data = of(this.userData)
    return data;
  }
}
