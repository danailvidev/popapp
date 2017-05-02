import { NgModule } from '@angular/core'
import { UniversalModule } from 'angular2-universal'
import { RouterModule } from '@angular/router'
import { routes } from './app.routes';
import { AppComponent } from './app.component'

import { LoginModule } from './login/login.module'
import { DashboardModule } from './dashboard/dashboard.module'
//import { SharedModule } from './shared/shared.module'
import { AuthGuard } from './guards/index'

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
    ],
    providers: [
        AuthGuard
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot(routes),
        //SharedModule.forRoot(),
        DashboardModule,
        LoginModule
    ]
})
export class AppModule {
}
