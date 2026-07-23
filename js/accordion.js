export function initAccordion() {
  const processItemGroup = document.querySelector(".working-process-group");
  if (!processItemGroup) return;

  const firstProcessItem = processItemGroup.firstElementChild;
  if (!firstProcessItem) return;

  firstProcessItem.classList.add("active");
  firstProcessItem.querySelector(".icon-show-process").src =
    "img/working-process/minus-icon.svg";

  processItemGroup.addEventListener("click", (e) => {
    const button = e.target.closest(".button-process");
    if (!button) return;

    const processItem = button.closest(".process-item");
    const processItems = processItemGroup.querySelectorAll(".process-item");
    const isActive = processItem.classList.contains("active");

    if (isActive) {
      removeActiveClassProcessItem(processItem);
      return;
    }

    processItems.forEach((item) => {
      removeActiveClassProcessItem(item);
    });

    processItem.classList.add("active");
    processItem.querySelector(".process-content").classList.add("is-open");
    processItem.querySelector(".icon-show-process").src =
      "img/working-process/minus-icon.svg";
  });
}

function removeActiveClassProcessItem(element) {
  element.classList.remove("active");
  element.querySelector(".process-content").classList.remove("is-open");
  element.querySelector(".icon-show-process").src =
    "img/working-process/plus-icon.svg";
}
