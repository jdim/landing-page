// Skills section: Set css gradient for percent progress blocks
export function setSkillsPercent() {
  const skillsItems = document
    .querySelector(".skills-list")
    .querySelectorAll(".skills-list__progress");
  skillsItems.forEach(el => {
    const progress = parseInt(el.dataset.progress, 10);
    el.style.background = `linear-gradient(to right, #10c9c3 ${progress}%, #d8d8d8 ${progress}%)`;
  });
}
