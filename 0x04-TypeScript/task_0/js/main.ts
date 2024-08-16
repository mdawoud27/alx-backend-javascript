interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Mohamed",
    lastName: "Dawoud",
    age: 22,
    location: "Egypt",
}

const student2: Student = {
    firstName: "Ahmed",
    lastName: "Omar",
    age: 25,
    location: "Germany"
}

const studentsList: Student[] = [student1, student2];

// Render a table with vanilla JavaScript
const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
})

document.body.appendChild(table);
