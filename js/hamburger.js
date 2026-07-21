export function initHamburger() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerButton = document.querySelector(".hamburger-button");

  hamburgerButton.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    hamburgerButton.classList.toggle("active");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && hamburgerMenu.classList.contains("active")) {
      hamburgerMenu.classList.remove("active");
      hamburgerButton.classList.remove("active");
    }
  });

  document.addEventListener("click", (e) => {
    if (
      (!e.target.closest(".header") &&
        hamburgerMenu.classList.contains("active")) ||
      e.target.closest(".hamburger-menu li a")
    ) {
      hamburgerMenu.classList.remove("active");
      hamburgerButton.classList.remove("active");
    }
  });
}
