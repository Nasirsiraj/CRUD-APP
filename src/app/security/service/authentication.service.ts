import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticate(username$: string, password$: string): boolean {
    if (username$ === 'Nasir' && password$ === 'nasir@asha') {
      sessionStorage.setItem('username', username$);
      sessionStorage.setItem('password', password$);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    const username$$ = sessionStorage.getItem('username');
    console.log(!(username$$ === null));
    return !(username$$ === null);
  }

  logOut(): void{
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
  }
}
