import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
//import { FormsModule, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
    selector: 'pop-my-campaign',
    template: require('./my-campaign.component.html'),
    styles: [require('./my-campaign.component.scss').toString()]
})

export class MyCampaignComponent implements OnInit {

    title: string = 'my campaign'

    constructor() {

    }

    ngOnInit() {

    }


    private popAppTypes = [
        { value: 'centerPopApp', display: 'Center PopApp' },
        { value: 'pushPopApp', display: 'Push PopApp' },
        { value: 'fullscreenPopApp', display: 'Full Screen PopApp' },
        { value: 'notificationPopApp', display: 'Notification PopApp' },
        { value: 'emails', display: 'Emails' }
    ]








}