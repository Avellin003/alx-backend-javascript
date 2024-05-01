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