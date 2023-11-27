const alert = document.querySelector(".alert");
const alertCloseBtn = document.querySelector(".alert__close");
const navigationBell = document.querySelector(".navigation__profile-bell");
const navigationAlert = document.querySelector(
  ".navigation__profile-notification-alert"
);
const navigationProfile = document.querySelector(
  ".navigation__profile-notification"
);
const navigationProfileName = document.querySelector(
  ".navigation__profile-name"
);

const body = document.querySelector("body");

alertCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert.style.display = "none";
});

navigationBell.addEventListener("click", (e) => {
  e.preventDefault();
  if (navigationAlert.classList.contains("active")) {
    navigationAlert.classList.remove("active");
  } else {
    navigationAlert.classList.add("active");
  }
});

navigationProfileName.addEventListener("click", (e) => {
  e.preventDefault();
  if (navigationProfile.classList.contains("active")) {
    navigationProfile.classList.remove("active");
  } else {
    navigationProfile.classList.add("active");
  }
});

body.addEventListener("click", (e) => {
  const isProfileBellClicked = e.target.closest(".navigation__profile-bell");
  const isNavigationAlert = e.target.closest(
    ".navigation__profile-notification-alert"
  );
  const isNavigationProfile = e.target.closest(
    ".navigation__profile-notification"
  );
  const isNaviagtionProfileName = e.target.closest(".navigation__profile-name");

  if (!isProfileBellClicked && !isNavigationAlert) {
    if (navigationAlert.classList.contains("active")) {
      navigationAlert.classList.remove("active");
    }
  }

  if (!isNaviagtionProfileName && !isNavigationProfile) {
    if (navigationProfile.classList.contains("active")) {
      navigationProfile.classList.remove("active");
    }
  }
});
