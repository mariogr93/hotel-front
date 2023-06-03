import { Component } from "@angular/core";

@Component({
    selector:"header-component",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})
export class HeaderComponent {


    isNavOpen = false;
    isSearchOpen = false;
    openSidebar(){
        this.isNavOpen = !this.isNavOpen
    }

    openSearch(){
        this.isSearchOpen = !this.isSearchOpen
    }
}