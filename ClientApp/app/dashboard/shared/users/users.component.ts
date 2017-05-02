import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { ClientUserService } from '../../../shared/services/client.user.service'

@Component({
    selector: 'pop-users-panel',
    template: require('./users.component.html'),
    styles: [require('./users.component.scss').toString()]
})

export class UsersComponent implements OnInit {
    public users: SampleUser[];

    constructor(private ClientUserService: ClientUserService) { }
    ngOnInit() {
        this.ClientUserService
            .getUsers()
            .subscribe(users => this.users = users)
    }
}

interface SampleUser {
    totalusers: number;
    targetedusers: number;
    emailable: number;
    online: number;
    offline: number;
}


