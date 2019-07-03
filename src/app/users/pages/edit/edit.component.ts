import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../../services/users/users.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersHttpService } from '../../services/users-http/users-http.service';
import { Data } from '../../models/users.interface';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    user: Data;
    userForm: FormGroup;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _router: Router,
        private _usersHttpService: UsersHttpService,
        private _usersService: UsersService,
    ) { }

    async ngOnInit() {
        this.userForm = this._formBuilder.group({
            'email': ['', []],
            'first_name': ['', []],
            'last_name': ['', []]
        });
        try {
            this.user = await this._usersService.getUser(this._activatedRoute.snapshot.paramMap.get('id'));
            this.userForm.get('email').setValue(this.user.email);
            this.userForm.get('first_name').setValue(this.user.first_name);
            this.userForm.get('last_name').setValue(this.user.last_name);
            console.log(this.user);
        } catch (e) {
            console.error(e);
        }
    }

    async onSubmit($event) {
        console.log($event);
        console.log(this.userForm);
        if (this.userForm.valid) {
            try {
                const update = await this._usersHttpService.updateUser(this.user.id, this.userForm.value).toPromise();
                this._usersService.updateUser(this.user.id, this.userForm.value);
                this._location.back();
                console.log(update);
            } catch (e) {
                console.error(e);
            }
        }
    }
}
