import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { ApiService } from './api'


@Injectable()
export class AuthenticationService {
    private path: string = '/api/authentication'

    constructor(private api: ApiService) { }

    login(username: string, password: string): Observable<any> {
        return this.api.login(this.path, username, password)
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}