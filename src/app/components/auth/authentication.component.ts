import { Component } from "@angular/core";


@Component({
    selector:"authentication-component",
    templateUrl:"./authentication.component.html",
    styleUrls:["./authentication.component.html"]
})
export class AuthenticationComponent {
    tabSelected = true;

    selectedTab(e: boolean){
      this.tabSelected = e;
    }
}