import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { CampaignService } from '../../shared/services/campaign.service'
//import { FormsModule, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { CampaignModel } from '../../models/campaign.interface'

import { ColorPickerDirective } from 'ct-angular2-color-picker/component'

@Component({
    selector: 'pop-campaign',
    template: require('./campaign.component.html'),
    styles: [require('./campaign.component.scss').toString()],
})

export class CampaignComponent implements OnInit {

    private btn2Visible: boolean = true
    private campaign: CampaignModel
    private color: string = "#127bdc"

    constructor(private CampaignService: CampaignService) {

    }

    ngOnInit() {
        this.campaign = {
            button1Text: 'Button Text',
            button2Text: 'Button Text',
            bodyText: 'Body Text',
            headerText: 'Header Text'
        }
    }

    public popAppTypes = [
        { value: 'centerPopApp', display: 'Center PopApp' },
        { value: 'pushPopApp', display: 'Push PopApp' },
        { value: 'fullscreenPopApp', display: 'Full Screen PopApp' },
        { value: 'notificationPopApp', display: 'Notification PopApp' },
        { value: 'emails', display: 'Emails' }
    ]
    public hideBtn() {
        this.btn2Visible = !this.btn2Visible
    }
    public addBtn() {
        this.btn2Visible = true
    }

    eraseData() {
        for (let prop in this.campaign) {
            if (this.campaign.hasOwnProperty(prop)) {
                delete this.campaign[prop];
            }
        }
    }
    saveCampaign() {
        this.CampaignService
            .createCampaign(this.campaign)
            .subscribe(res => {
                console.log(res)
                if (res.status = 200) {
                    alert('status text: ' + res.statusText)
                }
                else {
                    alert('error: ' + res.statusText)
                }
            })
    }




}