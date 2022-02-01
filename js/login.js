const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

//----- User Data-----//
let Username = document.querySelector(".user-name");
let Userpass = document.querySelector(".user-password");
let userLogin = document.querySelector(".user-login");

//----- Admin Data ---//
let adminName = document.querySelector(".admin-name");
let adminPass = document.querySelector(".admin-password");
let adminLogin = document.querySelector(".admin-login");

/* let trashbtn = document.querySelector(".trash-btn");
let editbtn = document.querySelector(".edit-btn"); */

//form

const user = {
  userName: "Jagdish90@gmail.com",
  password: "JagdishD#123",
};

const admin = {
  adminName: "Ankit12@google.com",
  password: "AnkitP#123",
};

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

userLogin.addEventListener("click", function () {
  if (!Username.value.trim() || !Userpass.value) {
    Swal.fire("All fields are required!");
    return 0;
  }

  if (Username.value !== user.userName || Userpass.value !== user.password) {
    Swal.fire("The username or password is incorrect");
    return 0;
  }

  userLogin.href = "../html/user.html";

  Username.value = "";
});

adminLogin.addEventListener("click", function () {
  if (!adminName.value.trim() || !adminPass.value) {
    Swal.fire("All fields are required!");
    return 0;
  }

  if (
    adminName.value !== admin.adminName ||
    adminPass.value !== admin.password
  ) {
    Swal.fire("The username or password is incorrect");

    return 0;
  }
  adminLogin.href = "../html/admin.html";

  adminName.value = "";
});
