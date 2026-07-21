export function initAccordion() {
  const processItem = document.querySelectorAll(".process-item");

  if (!processItem.length) return;

  processItem[0].classList.add("active");
  processItem[0].querySelector(".icon-show-process").src =
    "img/working-process/minus-icon.svg";

  for (let i = 0; i < processItem.length; i++) {
    const element = processItem[i];
    const button = element.querySelector(".button-process");
    const icon = element.querySelector(".icon-show-process");

    element.addEventListener("click", () => {
      const isActive = element.classList.contains("active");

      if (isActive) {
        removeActiveClassProcessItem(element);
        return;
      }

      processItem.forEach((e) => {
        removeActiveClassProcessItem(e);
      });

      element.classList.add("active");
      element.querySelector(".process-content").classList.add("is-open");
      icon.src = "img/working-process/minus-icon.svg";
    });
  }
}

function removeActiveClassProcessItem(element) {
  element.classList.remove("active");
  element.querySelector(".process-content").classList.remove("is-open");
  element.querySelector(".icon-show-process").src =
    "img/working-process/plus-icon.svg";
}
