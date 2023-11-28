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
const process = document.querySelector(".process");
const closeMainContent = document.querySelector(".main__content-toggle");
const singleProcess = document.querySelectorAll(".process__single");
const singleProcessCheckbox = document.querySelectorAll(
  ".process__single-icon"
);
const counterSpan = document.getElementById("counter_value");
const progress = document.querySelector(".progress__bar--progress");

const body = document.querySelector("body");
let count = 0;

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

closeMainContent.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.classList.toggle("close");
  process.classList.toggle("active");
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

singleProcess.forEach((process) => {
  process.addEventListener("click", () => {
    singleProcess.forEach((process) => {
      process.classList.remove("active");
    });
    process.classList.add("active");
  });
});

singleProcess.forEach((process, index, array) => {
  process.addEventListener("click", (e) => {
    const checkbox = e.target.closest(".check_icon");

    if (checkbox) {
      if (checkbox.checked) {
        console.log(checkbox.checked);

        // Check if there is a previous element
        const previousProcess = index > 0 ? array[index - 1] : null;

        if (previousProcess) {
          const previousCheckbox =
            previousProcess.querySelector(".check_icon input");

          // Add or remove the "active" class based on the previous checkbox state
          if (previousCheckbox && !previousCheckbox.checked) {
            previousProcess.classList.add("active");
          } else {
            previousProcess.classList.remove("active");
          }
        }

        // Move to the next element
        const nextProcess = process.nextElementSibling;

        if (nextProcess) {
          const nextCheckbox = nextProcess.querySelector(".check_icon input");

          // Add or remove the "active" class based on the next checkbox state
          if (!nextCheckbox || (nextCheckbox && !nextCheckbox.checked)) {
            singleProcess.forEach((process) => {
              process.classList.remove("active");
              nextProcess.classList.add("active");
            });
          } else {
            nextProcess.classList.remove("active");
          }
        }
        count++;
        counterSpan.innerText = count;
        const progressWidth = (count / 5) * 100 + "%";
        progress.style.width = progressWidth;
      } else {
        count--;
        counterSpan.innerText = count;
        const progressWidth = (count / 5) * 100 + "%";
        progress.style.width = progressWidth;
      }
    }
  });
});
