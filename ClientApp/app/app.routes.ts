import { Routes, RouterModule } from '@angular/router'
import { DashboardRoutes } from './dashboard/index'
import { LoginRoutes } from './login/index'
import { LoginComponent } from './login/login.component'

export const routes: Routes = [
    ...DashboardRoutes,
    ...LoginRoutes,
    { path: '**', component: LoginComponent }
];
