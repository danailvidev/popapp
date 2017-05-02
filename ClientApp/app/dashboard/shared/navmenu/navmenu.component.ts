import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'pop-nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.scss').toString()],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translateY(-10%)'
            })),
            state('out', style({
                transform: 'translateY(0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})
export class NavMenuComponent {
    menuState: string = 'out';
    
    toggleMenu(e) {
        e.preventDefault()
        this.menuState = 'out'
        if (e.target.getAttribute("aria-expanded") == "true") {
            this.menuState = 'in'
        }
    }
}

