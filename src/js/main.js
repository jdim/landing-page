import "../css/style.css";
import * as pageMenu from "./pageMenu";
import * as upArrowLink from "./upArrowLink";
import * as videoPlayer from "./video";
import * as slider from "./slider";
import * as skillsList from "./skillsList";
import contactForm from "./contact-form";

function init() {
  pageMenu.init();
  upArrowLink.init();
  videoPlayer.init();
  slider.init();
  skillsList.setSkillsPercent();
  contactForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
