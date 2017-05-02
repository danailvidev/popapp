import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { LoginComponent } from './login.component'
import { FormsModule } from '@angular/forms'

import { AuthenticationService, AlertService } from '../shared/services/index'
import { AlertComponent } from '../shared/directives/index'

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [LoginComponent, AlertComponent],
    exports: [LoginComponent],
    providers: [AuthenticationService, AlertService]
})

export class LoginModule { }
