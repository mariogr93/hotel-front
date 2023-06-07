import { Component, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    selector:"register-component",
    templateUrl:"./register.component.html",
    styleUrls:["./register.component.css"]
})

export class RegisterComponent implements OnInit {

    registerForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
    })


    get firstNameControl(): FormControl {
        return this.registerForm.get('firstName') as FormControl;
    }

    get lastNameControl(): FormControl {
        return this.registerForm.get('lastName') as FormControl;
    }

    constructor(private fb: FormBuilder){}

    ngOnInit(): void {

    }

    onSubmit(){

    }
}