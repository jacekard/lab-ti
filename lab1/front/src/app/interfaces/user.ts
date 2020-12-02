export interface User {
    login: string;
    password: string;
    name: string;
    surname: string;
    age: number;
    pesel: string;
    address: Address;
}

export interface Address {
    street: string;
    postalCode: string;
    city: string;
    country: string;
}