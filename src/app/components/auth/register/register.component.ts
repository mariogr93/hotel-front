import { Component, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, Validators } from "@angular/forms";

@Component({
    selector:"register-component",
    templateUrl:"./register.component.html",
    styleUrls:["./register.component.css"]
})

export class RegisterComponent implements OnInit {

    registerForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        password: [ '', Validators.required ],
        confirmPassword: [ '', Validators.required ],
    },  { validators: [ this.matchingPasswordsValidator ] })


    get firstNameControl(): FormControl {
        return this.registerForm.get('firstName') as FormControl;
    }

    get lastNameControl(): FormControl {
        return this.registerForm.get('lastName') as FormControl;
    }

    get passwordControl(): FormControl {
        return this.registerForm.get("password") as FormControl;
    }

    get confirmPasswordControl(): FormControl {
        return this.registerForm.get("confirmPassword") as FormControl;
    }

    constructor(private fb: FormBuilder){}

    ngOnInit(): void {

    }

    onSubmit(){

    }

    matchingPasswordsValidator(form: AbstractControl): ValidationErrors | null {
        const pass = form.get('password') as FormControl;
        const confirmPass = form.get('confirmPassword') as FormControl;

        return pass && confirmPass && pass.value == confirmPass?.value
            ? null
            : { matchingPasswordsValidator: true };
    }
}