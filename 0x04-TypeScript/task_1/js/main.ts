interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher3: Teacher = {
    firstName: 'Nabil',
    fullTimeEmployee: false,
    lastName: 'Ragab',
    location: 'Cairo',
    contract: false,
};

console.log(teacher3);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

// 3. Printing teachers
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.slice(0, 1)}. ${lastName}`;
}

printTeacher("John", "Doe")

// 4. Writing a class
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass {
    constructor(private firstName: string, private lastName: string) {

    }
    workOnHomework (): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}
