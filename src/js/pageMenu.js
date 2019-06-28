export function init() {
  const menuBtn = document.querySelector(".menu-icon");
  const pageMenu = document.querySelector(".page-nav");
  const modalBg = document.querySelector(".modal-bg");

  const toggle = () => {
    const navCssMediaQuery = 750;
    if (
      window.innerWidth >= navCssMediaQuery &&
      !pageMenu.classList.contains("page-nav_active")
    ) {
      return;
    }
    modalBg.classList.toggle("modal-bg_active");
    pageMenu.classList.toggle("page-nav_active");
  };

  menuBtn.addEventListener("click", toggle, false);
  modalBg.addEventListener("click", toggle, false);

  pageMenu.addEventListener("click", toggle, true);
}
