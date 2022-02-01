"use strict";

const workout_running = document.querySelector(".workouts");

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
    emp_City: "Pune",
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
                           </div>
                        <br>   
     </li>
     `;
    workout_running.insertAdjacentHTML("afterbegin", html);
  });
};
displayEmploye(employee);
