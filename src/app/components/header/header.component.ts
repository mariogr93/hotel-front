import { Component } from "@angular/core";

@Component({
    selector:"header-component",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})
export class HeaderComponent {


    isNavOpen = false;
    openSidebar(){
        this.isNavOpen = !this.isNavOpen
    }

}