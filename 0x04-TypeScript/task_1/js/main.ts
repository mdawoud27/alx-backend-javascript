interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'Nabil',
    fullTimeEmployee: false,
    lastName: 'Ragab',
    location: 'Cairo',
    contract: false,
};

console.log(teacher3);
