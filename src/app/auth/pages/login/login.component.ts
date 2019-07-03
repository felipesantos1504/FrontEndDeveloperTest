import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'auth/services';
import { LoginReq } from 'auth/models/login.interface';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    invalidUserOrPassword = false;
    /** Usado para mostrar o feedback do estado do form caso o usuário tenha feito o request */
    isSent = false;
    loginForm: FormGroup;

    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) { }

    ngOnInit(): void {
        if (localStorage.getItem('token') || this._authService.token) {
            this._router.navigate(['users'], { queryParams: { page: 1 } });
        }
        this.loginForm = this._formBuilder.group({
            'email': ['', [Validators.required, Validators.email]],
            'password': ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    async onSubmit($event) {
        this.isSent = true;
        if (this.loginForm.valid) {
            this.invalidUserOrPassword = false;
            try {
                const login = await this._authService.login(this.loginForm.value).toPromise();
                this._authService.token = login.token;
                localStorage.setItem('token', login.token);
                this._router.navigate(['users'], { queryParams: { page: 1 } });
            } catch (e) {
                console.error(e);
                if (e.status === 400) {
                    this.invalidUserOrPassword = true;
                }
            }
        }
    }
}
