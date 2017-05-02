import { Component, trigger, state, style, animate, transition } from '@angular/core';

@Component({
    selector: 'pop-overview',
    template: require('./overview.component.html'),
    styles: [require('./overview.component.scss').toString()],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }),
                animate('0.4s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateY(-100%)'
                }))
            ])
        ])
    ],

})
export class OverviewComponent {
}
