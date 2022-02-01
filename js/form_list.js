"use strict";
const inputName = document.querySelector(".emp-name");
const inputEmail = document.querySelector(".emp-email");
const inputSalary = document.querySelector(".emp-salary");
const inputCity = document.querySelector(".emp-city");
const workout_running = document.querySelector(".workouts");
const btn_Submit = document.querySelector(".btn-submit");

let employee = [
  {
    id: Math.random(),
    emp_Name: "Ankit Pawar",
    emp_Email: "ankit@gamil.com",
    emp_Salay: 8000,
    emp_City: "Pune",
  },
  {
    id: Math.random(),
    emp_Name: "Ganesh R Kumar",
    emp_Email: "ganesh@gamil.com",
    emp_Salay: 9000,
    emp_City: "Pune",
  },
  {
    id: Math.random(),
    emp_Name: "Umesh D soni",
    emp_Email: "umshe@gamil.com",
    emp_Salay: 3434,
    emp_City: "puen",
  },
  {
    id: Math.random(),
    emp_Name: "Arvind mahesh Jadhav",
    emp_Email: "arvind@gamil.com",
    emp_Salay: 9000,
    emp_City: "Dhule",
  },
  {
    id: Math.random(),
    emp_Name: "Pinki hanumant Lavte",
    emp_Email: "umshe@gamil.com",
    emp_Salay: 3434,
    emp_City: "Varansi",
  },
];

let formData = {};
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var letters = /^[A-z ]+$/;

console.log("welcome to live project");

btn_Submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    !inputName.value.trim() ||
    !inputEmail.value ||
    !inputSalary.value ||
    !inputCity.value
  ) {
    Swal.fire("All fields are required!");
    return 0;
  }
  if (!inputName.value.match(letters)) {
    Swal.fire("Invalid Name!");
    return 0;
  }

  if (!inputEmail.value.match(mailformat)) {
    Swal.fire("Invalid  email address!");
    return 0;
  }

  if (!inputCity.value.match(letters)) {
    Swal.fire("Invalid City!");
    return 0;
  }

  formData = {
    id: Math.random(),
    emp_Name: inputName.value,
    emp_Email: inputEmail.value,
    emp_Salay: +inputSalary.value,
    emp_City: inputCity.value,
  };

  employee.push(formData);
  displayEmploye(employee);
  resetData();
});

const displayEmploye = function (empData) {
  workout_running.innerHTML = "";
  empData.forEach((element) => {
    let html = `
    <li class="workout workout--running">

    <h2 class="workout__title">${element.emp_Name}</h2>
                           <div class="workout__details">
                                <span style="width:15rem" class="workout__icon">${element.emp_Email}</span>   
                                <span class="workout__value">Rs.${element.emp_Salay}</span>
                                <span style="width:6rem" class="workout__value">${element.emp_City}</span>
                                <button class="trash-btn" onclick=(trashBTN(${element.id}))><i class="far fa-trash-alt"></i></button>
                                <button class="edit-btn"><i class="far far fa-edit"></i></button>
                           </div>
                        <br>   
     </li>
     `;
    workout_running.insertAdjacentHTML("afterbegin", html);
    const editBTN = document.querySelector(".edit-btn");

    editBTN.addEventListener("click", function () {
      Swal.fire({
        title: "Edit User",
        html: `
        <input id="id" type="hidden" value='${element.id}'>
        <input id="fname" class="swal2-input" placeholder="Full Name" value="${element.emp_Name}">
        <input id="email" class="swal2-input" placeholder="Email ID" value="${element.emp_Email}"> 
        <input id="salary" class="swal2-input" placeholder="Salary" value="${element.emp_Salay}"> 
        <input id="city" class="swal2-input" placeholder="City" value="${element.emp_City}">`,

        focusConfirm: false,
        preConfirm: () => {
          userEdit(element.id);
        },
      });
    });
  });
};

displayEmploye(employee);
const trashBTN = function (eID) {
  employee = employee.filter((data) => data.id !== eID);
  displayEmploye(employee);
};

const resetData = () => {
  inputName.value = inputEmail.value = inputSalary.value = inputCity.value = "";
};

function userEdit(eID) {
  const id = document.getElementById("id").value;
  const fname = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const salary = document.getElementById("salary").value;
  const city = document.getElementById("city").value;

  let data = {
    id: id,
    emp_Name: fname,
    emp_Email: email,
    emp_Salay: +salary,
    emp_City: city,
  };

  if (
    !data.emp_Name.trim() ||
    !data.emp_Email ||
    !data.emp_Salay ||
    !data.emp_City
  ) {
    Swal.fire("All fields are required!");
    return 0;
  }
  if (!data.emp_Name.match(letters)) {
    Swal.fire("Invalid Name!");
    return 0;
  }

  if (!data.emp_Email.match(mailformat)) {
    Swal.fire("Invalid  email address!");
    return 0;
  }

  if (!data.emp_City.match(letters)) {
    Swal.fire("Invalid City!");
    return 0;
  }

  let result = employee.map((item) => {
    if (item.id === eID) {
      return data;
    }
    return item;
  });

  displayEmploye(result);
  Swal.fire("successful");
}
