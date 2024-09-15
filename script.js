const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = document.querySelector("#email");
const submit = document.querySelector("#submit");
let message = document.getElementById("message");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let message2 = document.getElementById("msg");
let demo = document.getElementById("demo");
let name = document.getElementById("name");

// Name validation
name.addEventListener("input", () => {
    if (name.value === "") {
        document.getElementById("demo2").innerText = "Write name";
    } else {
        document.getElementById("demo2").innerText = "";
    }
});

// Email validation
email.addEventListener("input", () => {
    const isValid = emailPattern.test(email.value);
    if (isValid) {
        demo.innerText = "";
    } else {
        demo.innerText = "Wrong email ID";
    }
});

// Password validation
password.addEventListener("input", () => {
    if (password.value === "") {
        message.innerText = "Enter the password";
    } else if (password.value.length < 8) {
        message.innerText = "Write 8 characters";
    } else {
        message.innerText = "";
    }
});

// Confirm password validation
confirmpassword.addEventListener("input", () => {
    if (password.value !== confirmpassword.value) {
        message2.innerText = "Passwords do not match";
    } else {
        message2.innerText = "";
    }
});

// Form submit handler
document.getElementById("form").addEventListener("submit", function (event) {
    let valid = true;

    // Check name
    if (name.value === "") {
        document.getElementById("demo2").innerText = "Write name";
        valid = false;
    }

    // Check email
    if (!emailPattern.test(email.value)) {
        demo.innerText = "Wrong email ID";
        valid = false;
    }

    // Check password
    if (password.value === "") {
        message.innerText = "Enter the password";
        valid = false;
    } else if (password.value.length < 8) {
        message.innerText = "Write 8 characters";
        valid = false;
    }

    // Check confirm password
    if (password.value !== confirmpassword.value) {
        message2.innerText = "Passwords do not match";
        valid = false;
    }

    // Prevent form submission if not valid
    if (!valid) {
        event.preventDefault();
        alert("enter all fields correctly")
    } else {
        alert("Form submitted successfully");
    }
});
