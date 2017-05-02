import { Injectable } from '@angular/core'
import { ApiService } from './api'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ClientUserService {

    private path: string = '/api/account/test'

    constructor(private api: ApiService) { }

    getUsers() : Observable<any> {
        return this.api.get(this.path)
    }
}
