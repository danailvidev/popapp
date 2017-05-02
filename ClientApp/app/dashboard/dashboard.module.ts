import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { OverviewModule } from './overview/overview.module'
import { FormsModule } from '@angular/forms'

import { DashboardComponent } from './index'
import { HeaderComponent } from './shared/header/header.component'
import { NavMenuComponent } from './shared/navmenu/navmenu.component'
import { CampaignComponent } from './campaign/campaign.component'
import { GroupComponent } from './group/group.component'
import { UsersComponent } from './shared/users/users.component'
import { MyCampaignComponent } from './my-campaign/my-campaign.component'

import { ApiService, ClientUserService, CampaignService, AlertService } from '../shared/services/index'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        OverviewModule,
        FormsModule
    ],
    declarations: [
        DashboardComponent,
        HeaderComponent,
        NavMenuComponent,
        CampaignComponent,
        GroupComponent,
        UsersComponent,
        MyCampaignComponent
    ],
    exports: [DashboardComponent],
    providers: [ApiService, ClientUserService, CampaignService, AlertService]
})

export class DashboardModule { }
