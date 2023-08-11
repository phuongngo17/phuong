let students = [];
if (localStorage.getItem("students")) {
    students = JSON.parse(localStorage.getItem("students"));
} else {
    localStorage.setItem("students", JSON.stringify(students));
}

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}
let indexUpdate = null;
function showTable(data = students) {
    let str = "";
    for (i = 0; i < data.length; i++) {
        let element = data[i];
        str += ` <tr>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.phone}</td>
                <td>${element.address}</td>
                <td>${element.gender}</td>
                <td><button onclick="updateStudent(${i})">update</button></td>
                <td><button onclick="deleteStudent(${i})">delete</button></td>
                <td></td>
            </tr>`
    }
    document.getElementById("tbody").innerHTML = str;
}
showTable();

function saveStudent() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    if (indexUpdate != null) {
        students[indexUpdate] = {
            name,
            email,
            phone,
            address,
            gender
        }
        showTable();
        indexUpdate = null;
        return;
    }

    let newStudent = {
        name,
        email,
        phone,
        address,
        gender
    }
    students.push(newStudent);
    showTable();
}

function deleteStudent(index) {
    if (confirm("Bạn có chắc muốn xóa?")) {
        if (index !== -1) {
            students.splice(index, 1);
            showTable();
            saveData();
        }
    }
}

function updateStudent(index) {
    const student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("phone").value = student.phone;
    document.getElementById("address").value = student.address;
    document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true;
    indexUpdate = index;
}

function sortStudent() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    showTable();
}

function searchStudent() {
    let textSearch = document.getElementById("search").value;
    let findStudent = students.filter(student => student.name.toLowerCase().includes(textSearch.trim().toLowerCase()))
    showTable(findStudent);
}