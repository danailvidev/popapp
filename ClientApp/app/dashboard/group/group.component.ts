import { Component } from '@angular/core';

@Component({
    selector: 'pop-group',
    template: require('./group.component.html'),
    styles: [require('./group.component.scss').toString()]
})

export class GroupComponent {

    private devices: string[] = ['Desctop', 'Android', 'IOS']
    private ddlTriggers: string[] = [
        'Country',
        'Language',
        'Registration date',
        'Open trade on',
        'Balance between',
        'Volume between',
        'Won in a row',
        'Loss in a row',
        'Age',
        'Balance above',
        'Volume above',
        'Total open trade',
        'More then 50% trade',
        'Number of deposits',
        'Deposit amount',
        'PNL between',
        'Copy specific trader',
        'Copy specific asset',
        'Trade more at night',
        'Trade more in the ',
        'Used custom feature',
        'Was on custom page',
        'Clicked custom button',
        'One trade amount is',
        'All users'

    ]

    private hideElement: boolean = false;
    constructor() {
    
    }

    toggleElement(e) {
        e.srcElement.parentElement.parentElement.parentElement.style.display = "none"
    }
}