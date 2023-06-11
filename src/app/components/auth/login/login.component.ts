import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    selector:"login-component",
    templateUrl:"./login.component.html",
    styleUrls:["./login.component.css"]
})


export class LoginComponent {

    loginForm = this.fb.group({
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required]]
    })

    constructor(private fb: FormBuilder){}

    get emailControl(): FormControl {
        return this.loginForm.get("email") as FormControl
    }

    get passwordControl(): FormControl {
        return this.loginForm.get("password") as FormControl;
    }


    onSubmit(){
        if (this.loginForm.valid) {
            //submit form
        }
    }
}