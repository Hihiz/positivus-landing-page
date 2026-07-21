export function initSliderTestimonial() {
  const slider = document.querySelector(".testimonial-group");
  const cards = document.querySelectorAll(".testimonial-card");
  const navDotContainer = document.querySelector(".nav-dots");
  const buttonPrev = document.querySelector(".prev-btn");
  const buttonNext = document.querySelector(".next-btn");

  if (!slider || cards.length === 0) return;

  let currentIndex = 0;
  const cardCount = Math.min(cards.length, 6);

  cards.forEach((card, i) => {
    card.dataset.index = i;
  });

  navDotContainer.innerHTML = "";

  for (let i = 0; i < cardCount; i++) {
    const dot = document.createElement("button");
    dot.classList.add("nav-dot");
    dot.setAttribute("aria-label", `Перейти к отзыву ${i + 1}`);
    if (i === 0) dot.classList.add("active");
    navDotContainer.appendChild(dot);
  }

  const dots = navDotContainer.querySelectorAll(".nav-dot");

  function updateActiveDot() {
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === currentIndex);
    });
  }

  function getScrollStep() {
    const card = cards[0];
    const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
    const cardWidth = card.offsetWidth + gap;
    return cardWidth;
  }

  function goTo(index) {
    const bounded = Math.max(0, Math.min(index, cardCount - 1));
    slider.scrollTo({
      left: getScrollStep() * bounded,
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentIndex = parseInt(entry.target.dataset.index);
          updateActiveDot();
        }
      });
    },
    {
      root: slider,
      threshold: window.innerWidth >= 1024 ? 1.0 : 0.5,
    },
  );

  cards.forEach((card) => observer.observe(card));

  buttonPrev.addEventListener("click", () => {
    const nextIndex = currentIndex === 0 ? cardCount - 1 : currentIndex - 1;
    goTo(nextIndex);
  });

  buttonNext.addEventListener("click", () => {
    const nextIndex = currentIndex === cardCount - 1 ? 0 : currentIndex + 1;
    goTo(nextIndex);
  });

  navDotContainer.addEventListener("click", (e) => {
    const targetDot = e.target.closest(".nav-dot");
    if (!targetDot) return;
    const index = Array.from(dots).indexOf(targetDot);
    goTo(index);
  });
}
