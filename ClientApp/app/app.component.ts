import { Component, ViewContainerRef } from '@angular/core';
//import { Config } from '../../config/env.config';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss').toString()]
})
export class AppComponent {
    private viewContainerRef: ViewContainerRef
    public constructor(viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef
        console.log('Environment config')
    }
}
