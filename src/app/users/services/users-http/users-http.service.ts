import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Users, Data } from '../../models/users.interface';


@Injectable()
export class UsersHttpService {
    constructor(
        private _httpClient: HttpClient
    ) {
    }

    deleteUser(id: string | number) {
        return this._httpClient.delete<any>(`api/users/${id}?delay=2`);
    }
    getUsers(page: string | number) {
        return this._httpClient.get<Users>(`api/users?delay=2&page=${page}`);
    }
    getUser(id: string | number) {
        return this._httpClient.get<Data>(`api/users/${id}?delay=2`);
    }
    updateUser(id: string | number, user: Data) {
        return this._httpClient.put<any>(`api/users/${id}?delay=2`, user);
    }

}
