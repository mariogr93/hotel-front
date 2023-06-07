import { Component } from "@angular/core";
import { Route, Router } from "@angular/router";

@Component({
    selector:"header-component",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})
export class HeaderComponent {


    isNavOpen = false;
    isRoomOptionsOpen = false;
    isReservationsOptionsOpen = false;
    isFoodOptionsOpen = false;
    isAboutUsOptionsOpen = false;

    isSearchOpen = false;

    constructor(private router: Router){}
    openSidebar(){
        this.isNavOpen = !this.isNavOpen
    }

    openSearch(){
        this.isSearchOpen = !this.isSearchOpen
    }

    goToReserve(){
        this.router.navigate(['/auth'])
    }
}