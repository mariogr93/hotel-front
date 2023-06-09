export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    gender: string;
    phoneNumber: number;
}

export interface ClientRegistration extends User {
    passportNumber: string;
    booking: string;
}

export interface Employee extends User {
    salary: number;
    hotel: string;
}

// EMPLOYEE
// private HotelEntity hotel;

// CLIENT 
// private BookingEntity booking;

// BOTH
// private Role role;
// private Gender gender;