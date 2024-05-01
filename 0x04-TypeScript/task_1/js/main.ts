interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Director extends Teacher{
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string):string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Interface for the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

// Interface for the class
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Class
class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}