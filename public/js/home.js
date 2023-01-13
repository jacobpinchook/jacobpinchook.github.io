const burgerMenu = document.querySelector(".burgerMenu");
const menuItems = document.querySelectorAll(".menuItem");
const burger = document.querySelector(".burger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (burgerMenu.classList.contains("showMenu")) {
    burgerMenu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    burgerMenu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

burger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

// --------Scroll to top button--------- //

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};
backToTopButton.addEventListener("click", goToTop);

$(document).ready(function () {
  // Add class to mailto link
  // Needed to separate the disabling of the default action AND copy email to clipboard
  $("a[href^=mailto]").addClass("mailto-link");

  var mailto = $(".mailto-link");
  var messageCopy = "Click to copy email address";
  var messageSuccess = "Email address copied to clipboard";

  mailto.append('<span class="mailto-message"></span>');
  $(".mailto-message").append(messageCopy);

  // Disable opening your email client. yuk.
  $("a[href^=mailto]").click(function () {
    return false;
  });

  // On click, get href and remove 'mailto:' from value
  // Store email address in a variable.
  mailto.click(function () {
    var href = $(this).attr("href");
    var email = href.replace("mailto:", "");
    copyToClipboard(email);
    $(".mailto-message").empty().append(messageSuccess);
    setTimeout(function () {
      $(".mailto-message").empty().append(messageCopy);
    }, 2000);
  });
});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("value", text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
