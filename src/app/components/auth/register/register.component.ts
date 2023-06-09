import { Component, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, Validators } from "@angular/forms";
import { ClientRegistration } from "src/app/models/user.interface";

@Component({
    selector:"register-component",
    templateUrl:"./register.component.html",
    styleUrls:["./register.component.css"]
})

export class RegisterComponent implements OnInit {
    
    registerForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],        
        role: ['', [Validators.required]],
        password: [ '', Validators.required ],
        confirmPassword: [ '', Validators.required ],
    },  { validators: [ this.matchingPasswordsValidator ] })


    get firstNameControl(): FormControl {
        return this.registerForm.get('firstName') as FormControl;
    }

    get lastNameControl(): FormControl {
        return this.registerForm.get('lastName') as FormControl;
    }

    get emailControl(): FormControl {
        return this.registerForm.get("email") as FormControl
    }

    get roleControl(): FormControl {
        return this.registerForm.get("role") as FormControl
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
        if (this.registerForm.valid) {
            const newUser: ClientRegistration = this.getFrom()
        }

    }

    matchingPasswordsValidator(form: AbstractControl): ValidationErrors | null {
        const pass = form.get('password') as FormControl;
        const confirmPass = form.get('confirmPassword') as FormControl;

        return pass && confirmPass && pass.value == confirmPass?.value
            ? null
            : { matchingPasswordsValidator: true };
    }

    getFrom():ClientRegistration {
        const signupForm: ClientRegistration = {
            firstName : this.firstNameControl.value,
            lastName: this.lastNameControl.value,
            email: this.emailControl.value,
            password:this.passwordControl.value,
            role: this.roleControl.value
        }
        return signupForm;
    }
}