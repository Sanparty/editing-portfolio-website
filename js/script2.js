const blurPage = function (status) {
  const fullPage = [
    document.querySelector("header"),
    document.querySelector(".full-container"),
    document.querySelector("footer"),
  ];
  if (status) {
    fullPage.forEach((item) => item.classList.add("blur"));
  } else {
    fullPage.forEach((item) => item.classList.remove("blur"));
  }
};

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  blurPage(true);
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  blurPage(false);
}

/* Open email overlay */
function openEmail() {
  document.getElementById("myEmail").style.display = "block";
  blurPage(true);
}

/* Close email overlay */
function closeEmail() {
  document.getElementById("myEmail").style.display = "none";
  blurPage(false);
}

window.onscroll = function () {
  scrollFunction();
};

//Get the button:
mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
