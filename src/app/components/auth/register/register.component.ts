import { Component, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, Validators } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { ClientRegistration, EmployeeRegistration, User } from "src/app/models/user.interface";

@Component({
    selector:"register-component",
    templateUrl:"./register.component.html",
    styleUrls:["./register.component.css"]
})

export class RegisterComponent implements OnInit {
    

    private isEmployeeForm$ = new BehaviorSubject<boolean>(false);
    _isEmployeeForm: Observable<boolean> = this.isEmployeeForm$.asObservable()

    registerForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],        
        phoneNumber: ['', [Validators.required]],
        password: [ '', Validators.required ],
        confirmPassword: [ '', Validators.required ],
        role: ['', [Validators.required]],
        gender: ['', [Validators.required]],
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

    get genderControl(): FormControl {
        return this.registerForm.get("gender") as FormControl
    }

    get phoneNumberControl(): FormControl {
        return this.registerForm.get("phoneNumber") as FormControl
    }

    get passportNumberControl(): FormControl {
        return this.registerForm.get("passportNumber") as FormControl
    }

    get bookingControl(): FormControl {
        return this.registerForm.get("booking") as FormControl
    }

    get salaryControl(): FormControl {
        return this.registerForm.get("salary") as FormControl
    }

    get hotelControl(): FormControl {
        return this.registerForm.get("hotel") as FormControl
    }

    get passwordControl(): FormControl {
        return this.registerForm.get("password") as FormControl;
    }

    get confirmPasswordControl(): FormControl {
        return this.registerForm.get("confirmPassword") as FormControl;
    }

    get isAdminUser(): boolean {
        return true;
    }

    constructor(private fb: FormBuilder){}

    ngOnInit(): void {
        this._isEmployeeForm.subscribe(val => val ? this.switchToEmployeeForm() : this.switchToClientForm())
    }

    onSubmit(){
        if (this.registerForm.valid) {
            if(this.isEmployeeForm$.value){
                const newEmployee: EmployeeRegistration = this.getEmployeeForm()
            } else {
                const newClient: ClientRegistration = this.getClientForm()
            }
        }
    }

    switchToEmployeeForm(){
        this.registerForm.removeControl('passportNumber')
        this.registerForm.removeControl('booking')
        this.registerForm.addControl('salary', new FormControl('', Validators.required));
        this.registerForm.addControl('hotel', new FormControl('', Validators.required));
    }

    switchToClientForm(){
        this.registerForm.removeControl('salary')
        this.registerForm.removeControl('hotel')
        this.registerForm.addControl('passportNumber', new FormControl('', Validators.required));
        this.registerForm.addControl('booking', new FormControl('', Validators.required));
    }

    toggleSwitch($e: any){
        this.isEmployeeForm$.next($e.target.checked)
    }

    matchingPasswordsValidator(form: AbstractControl): ValidationErrors | null {
        const pass = form.get('password') as FormControl;
        const confirmPass = form.get('confirmPassword') as FormControl;

        return pass && confirmPass && pass.value == confirmPass?.value
            ? null
            : { matchingPasswordsValidator: true };
    }

    getGeneralForm():User {
        let signupForm:User = { 
            firstName : this.firstNameControl.value,
            lastName: this.lastNameControl.value,
            email: this.emailControl.value,
            password:this.passwordControl.value,
            role: this.roleControl.value,
            gender: this.genderControl.value,
            phoneNumber: this.phoneNumberControl.value,
        }

        return signupForm;
    }

    getEmployeeForm():EmployeeRegistration {
        const employeeForm: EmployeeRegistration = {...this.getGeneralForm(), 
            salary: this.salaryControl.value, 
            hotel: this.hotelControl.value
        }
        return employeeForm;
    }
    getClientForm():ClientRegistration {
        const clientForm: ClientRegistration = {...this.getGeneralForm(), 
            passportNumber: this.passportNumberControl.value, 
            booking: this.bookingControl.value
        }

        return clientForm;
    }

}