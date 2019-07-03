import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    isLoading = false;

    constructor() {

    }

    hideLoading() {
        this.isLoading = false;
    }

    showLoading() {
        this.isLoading = true;
    }
}
