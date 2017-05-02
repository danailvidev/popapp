import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw'

@Injectable()
export class ApiService {
    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })

    private apiUrl: string = 'http://localhost:64971'

    //give me instance 
    constructor(private http: Http) { }

    private getJson(response: Response) {
        return response.json();
    }

    private checkForErrors(response: Response) {
        if (response.status >= 200 && response.status <= 300) {
            return response
        } else {
            let error = new Error(response.statusText)
            error['response'] = response
            console.log(error)
            throw error
        }
    }

    get(path: string): Observable<any> {
        return this.http.get(`${this.apiUrl}${path}`, { headers: this.headers })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
    }

    post(path: string, data: any): Observable<any> {
        console.log(JSON.stringify(data))
        return this.http.post(
            `${this.apiUrl}${path}`,
            JSON.stringify(data),
            { headers: this.headers })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))

    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}${path}`, { headers: this.headers })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
    }

    login(path: string, username: string, password: string) {
        return this.http.post(`${this.apiUrl}${path}`,
            JSON.stringify({ username: username, password: password }),
            { headers: this.headers }
        )
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json()
                console.log(user)
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user))
                }
            })

    }
}
