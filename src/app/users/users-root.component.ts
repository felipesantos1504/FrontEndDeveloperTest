import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'auth/services';

@Component({
  selector: 'app-users-root',
  templateUrl: './users-root.component.html',
  styleUrls: ['./users-root.component.scss']
})
export class UsersRootComponent {

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _viewContainerRef: ViewContainerRef
  ) {

  }

  logout() {
    this._authService.token = null;
    localStorage.removeItem('token');
    this._router.navigateByUrl('/login');
  }
}
