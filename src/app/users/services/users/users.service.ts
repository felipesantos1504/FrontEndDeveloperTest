import { Injectable } from '@angular/core';
import { Users } from '../../models/users.interface';

import { Router } from '@angular/router';
import { UsersHttpService } from '../users-http/users-http.service';

@Injectable()
export class UsersService {

    users: Users;

    constructor(
        private _usersHttpService: UsersHttpService,
        private _router: Router
    ) {
        console.log('omg');
    }

    deleteUser(id: string | number) {
        this.users.data = this.users.data.filter(user => {
            return user.id !== id;
        });
    }

    async getUser(id: string) {
        try {
            if (this.users) {
                return this.users.data.find(user => {
                    return user.id === +id;
                });
            } else {
                const getUser: any = await this._usersHttpService.getUser(id).toPromise();
                console.log(getUser);
                return getUser.data;
            }
        } catch (e) {
            console.error(e);
            this._router.navigateByUrl('/not-found');
        }
    }

    updateUser(id: string | number, data: any) {
        try {
            this.users.data.forEach(user => {
                if (user.id === id) {
                    user.email = data.email;
                    user.first_name = data.first_name;
                    user.last_name = data.last_name;
                }
            });
        } catch (e) {
            console.error('Não foi possível atualizar o usuário porém o request foi feito!');
            console.error(e);
        }
    }
}
