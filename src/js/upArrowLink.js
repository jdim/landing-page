const arrowElement = document.querySelector(".page__up-arrow");
import { throttle } from "./helper";

export function init() {
  throttle(toggleLink, 1500)();
  arrowElement.addEventListener("click", moveToTop);
  window.addEventListener("scroll", throttle(toggleLink, 500));
}

function moveToTop() {
  window.scrollTo(0, 0);
}

function toggleLink() {
  const screenThreshold = 1.5;
  const viewHeight = document.defaultView.innerHeight;

  if (window.scrollY > viewHeight * screenThreshold) {
    arrowElement.classList.add("page__up-arrow_active");
    return;
  }
  arrowElement.classList.remove("page__up-arrow_active");
}
