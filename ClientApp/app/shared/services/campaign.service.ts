import { Injectable } from '@angular/core'
import { ApiService } from './api'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CampaignService {

    private path: string = '/api/campaign/CreateCampaign'
    //private data: any = null

    constructor(private api: ApiService) { }

    createCampaign(data): Observable<any> {
        console.log('campaignservice', data)
        return this.api.post(this.path, data)
    }
    getCampaign(all = false) {

    }
    deleteCampaign() {

    }
}