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
