var student1 = {
    firstName: "Mohamed",
    lastName: "Dawoud",
    age: 22,
    location: "Egypt",
};
var student2 = {
    firstName: "Ahmed",
    lastName: "Omar",
    age: 25,
    location: "Germany"
};
var studentsList = [student1, student2];
// Render a table with vanilla JavaScript
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map