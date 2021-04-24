window.onscroll = function () { scrollShowNav(), scrollFunction() };

function homeLink() {
  window.location.href = "index.html";
}
function aboutLink() {
  window.location.href = "about.html";
}
function contactLink() {
  window.location.href = "contact.html";
}
function productLink() {
  window.location.href = "products.html";
}


// For the purpose of Sticky Navbar

let stickyTop = document.getElementById("nav").offsetTop;
function scrollShowNav() {
  if (window.pageYOffset >= 180) {
    document.getElementById("nav").classList.add("fixed-top");
  } else {
    document.getElementById("nav").classList.remove("fixed-top");
  }
}


function validateForm() {


  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("mobileNumberError").innerHTML = "";

  document.getElementById("nameError").classList.remove("alert");
  document.getElementById("nameError").classList.remove("alert-danger");
  document.getElementById("emailError").classList.remove("alert");
  document.getElementById("emailError").classList.remove("alert-danger");
  document.getElementById("mobileNumberError").classList.remove("alert");
  document.getElementById("mobileNumberError").classList.remove("alert-danger");

  // document.getElementById("name").style.border = "1px solid white";

  var username = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobileNumber = document.getElementById("mobileNumber").value;

  if (username == "" || username.length <= 9) {
    var temp;
    document.getElementById("nameError").classList.add("alert");
    document.getElementById("nameError").classList.add("alert-danger");
    if (username == "") {
      temp = "Sorry,your name cannot be empty";
    }
    else {
      temp = "Sorry,your name must be greater than nine characters";
    }
    document.getElementById("nameError").innerHTML = temp;
    // document.getElementById("name").style.border = "1px solid red";
    // window.location.href = "#name";
    window.location.href = "#contactUs";
    return false;
  } else if (email == "" || email.indexOf("@") <= 0) {
    var temp;
    document.getElementById("emailError").classList.add("alert");
    document.getElementById("emailError").classList.add("alert-danger");
    if (email == "") {
      temp = "Enter your email"
    }
    else {
      temp = "Sorry, Wrong position of @";
    }
    document.getElementById("emailError").innerHTML = temp;
    // document.getElementById("name").style.border = "1px solid red";
    window.location.href = "#contactUs";
    return false;
  } else if (mobileNumber == "" || mobileNumber.charAt(0) != "+" || mobileNumber.charAt(1) != "9" || mobileNumber.charAt(2) != "2" || mobileNumber.length != 13) {
    var temp;
    document.getElementById("mobileNumberError").classList.add("alert");
    document.getElementById("mobileNumberError").classList.add("alert-danger");
    if (mobileNumber == "") {
      temp = "Enter a mobile number";
    } else if (mobileNumber.charAt(0) != "+" || mobileNumber.charAt(1) != "9" || mobileNumber.charAt(2) != "2") {
      temp = "Sorry, Your mobile number must be start with +92 "
    }
    else {
      temp = "Sorry, your mobile number contain exactly 13 characters";
    }
    document.getElementById("mobileNumberError").innerHTML = temp;
    window.location.href = "#contactUs";
    return false;
  }
}


function menuBar() {
  var x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function scrollFunction() {
  if (window.pageYOffset > 300) {
    document.getElementById("onTop").style.display = "block";
  } else {
    document.getElementById("onTop").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

