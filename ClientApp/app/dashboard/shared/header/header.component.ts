import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'


@Component({
    selector: 'pop-header',
    template: require('./header.component.html'),
    styles: [require('./header.component.scss').toString()],
})
export class HeaderComponent implements OnInit {
    private date: Date
    private weekDay: string
    public isScrolled: boolean = false
    public isMenuCollapsed: boolean = false
    private currentUser: string

    constructor(private router: Router) { }

    ngOnInit() {
        
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
         
        this.date = new Date()
        this.weekDay = getWeekDay(this.date)
        function getWeekDay(date) {
            var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

            return days[date.getDay()]
        }
    }
    signOut() {
        localStorage.removeItem('currentUser')
        this.router.navigate(["/login"])
    }
}

