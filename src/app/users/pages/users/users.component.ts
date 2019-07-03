import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersHttpService } from '../../services/users-http/users-http.service';
import { Users, Data } from '../../models/users.interface';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  currentPage = 1;
  users: Users;
  usersPages: Array<number> = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _usersHttpService: UsersHttpService,
    private _usersService: UsersService
  ) {
    this._activatedRoute.queryParamMap.subscribe(params => {
      if (params.get('page')) {
        this.currentPage = +params.get('page');
      }

    })
  }

  async delete(user: Data) {
    const rm = await this._usersHttpService.deleteUser(user.id).toPromise();
    this._usersService.deleteUser(user.id);
    this.users = { ... this._usersService.users };
    console.log(rm);
  }

  edit(user: Data) {
    this._router.navigate([user.id], { relativeTo: this._activatedRoute });
  }

  async goToPage(page: number) {
    this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: { page } });
    this._usersService.users =
      await this._usersHttpService.getUsers(page.toString()).toPromise();

    this.users = { ... this._usersService.users };
  }

  async ngOnInit() {
    try {
      if (!this._usersService.users) {
        let page: any;

        this._activatedRoute.snapshot.queryParamMap.get('page') ? page = this._activatedRoute.snapshot.queryParamMap.get('page') : page = 1;

        this._usersService.users =
          await this._usersHttpService.getUsers(page).toPromise();
      }
      console.log(this._usersService.users);
      // Criando uma cópia do objeto
      this.users = { ... this._usersService.users };
      console.log(this._usersService.users);
      for (let index = 1; index <= this._usersService.users.total_pages; index++) {
        this.usersPages.push(index);
      }
      console.log(this.usersPages);
    } catch (e) {
      console.error(e);
    }
  }
}
