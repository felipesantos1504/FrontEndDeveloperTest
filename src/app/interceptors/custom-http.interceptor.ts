import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AuthService } from 'auth/services';
import { LoadingService } from 'shared/services/loading/loading.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    constructor(
        private _authService: AuthService,
        private _loadingService: LoadingService
    ) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._loadingService.showLoading();
        let request = req.clone();
        if (this._authService.token) {
            request = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${this._authService.token}`
                }
            });
        }
        return next.handle(request).pipe(finalize(() => {
            this._loadingService.hideLoading();
        }));
    }
}
