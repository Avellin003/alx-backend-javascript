// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement("table");

// Iterate over the studentsList array
studentsList.forEach(student => {
    // Create a new row for each student
    const row = document.createElement("tr");

    // Create table data cells for the first name and location of each student
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the table
    table.appendChild(row);
});

// Append the table to the body of the document
document.body.appendChild(table);
