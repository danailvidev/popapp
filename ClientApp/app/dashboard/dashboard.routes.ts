import { Route } from '@angular/router';

import { OverviewRoutes } from './overview/overview.routes'
import { CampaignRoutes } from './campaign/campaign.routes'
import { GroupRoutes } from './group/group.routes'
import { MyCampaignRoutes } from './my-campaign/my-campaign.routes'

import { DashboardComponent } from './index'
import { AuthGuard } from '../guards/index'
import { OverviewComponent } from './overview/overview.component'

export const DashboardRoutes: Route[] = [
    { path: '', redirectTo: '/dashboard/overview', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            ...OverviewRoutes,
            ...CampaignRoutes,
            ...GroupRoutes,
            ...MyCampaignRoutes
        ],
        canActivate: [AuthGuard]
    }
];
