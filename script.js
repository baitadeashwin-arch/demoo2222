
let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value.trim();

    if (!name || !roll || !email || !course) {
        alert("Please fill all fields");
        return;
    }

    if (students.some(student => student.roll === roll)) {
        alert("Roll number already exists");
        return;
    }

    students.push({
        name: name,
        roll: roll,
        email: email,
        course: course
    });

    saveStudents();
    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";

    alert("Student added successfully!");
}

function displayStudents() {
    let list = document.getElementById("studentList");
    let search = document.getElementById("search").value.toLowerCase();

    list.innerHTML = "";

    students.forEach((student, index) => {
        let searchable = (
            student.name + " " +
            student.roll + " " +
            student.email + " " +
            student.course
        ).toLowerCase();

        if (searchable.includes(search)) {
            let row = document.createElement("tr");

            [student.name, student.roll, student.email, student.course]
                .forEach(value => {
                    let cell = document.createElement("td");
                    cell.textContent = value;
                    row.appendChild(cell);
                });

            let action = document.createElement("td");
            let deleteButton = document.createElement("button");

            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-btn";

            deleteButton.onclick = function() {
                deleteStudent(index);
            };

            action.appendChild(deleteButton);
            row.appendChild(action);
            list.appendChild(row);
        }
    });
}

function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this student?")) {
        students.splice(index, 1);
        saveStudents();
        displayStudents();
    }
}

displayStudents();
