// polyfill for #Element.closest
import elementClosest from "element-closest";
elementClosest(window);

class Slider {
  constructor(sliderElem) {
    this._sliderElem = sliderElem;
    this._paginationElem = this._sliderElem.querySelector(
      ".slider__pagination"
    );
    this._curSlideIndex = 0;
    this._prevSlideIndex = null;

    this._setupPagination();
    this._setupOnTouch();
  }

  _setupPagination() {
    const slider = document.querySelector(".slider");

    const ref = this._paginationElem.querySelector(".slider__ref");
    const slidesLength = slider.querySelectorAll(".slider__item").length;

    for (let i = 0; i < slidesLength; i++) {
      let refElem = i === 0 ? ref : ref.cloneNode(true);
      this._paginationElem.appendChild(refElem);
      refElem.dataset.slideIndex = i;
    }

    this._markActiveDot();

    this._paginationElem.addEventListener(
      "click",
      this._onClickSliderDot.bind(this),
      true
    );
  }

  _onClickSliderDot(ev) {
    const evTarget = ev.target;
    if (evTarget.classList.contains("slider__pagination")) {
      return;
    }

    const refElem = evTarget.closest(".slider__ref");

    this.setCurrentSlide(parseInt(refElem.dataset.slideIndex, 10));
    this._markActiveDot();
  }

  setCurrentSlide(slideIndex) {
    const sliderInner = this._sliderElem.querySelector(".slider__inner");
    this._prevSlideIndex = this._curSlideIndex;
    this._curSlideIndex = slideIndex;
    sliderInner.style.right = `${this._curSlideIndex * 100}%`;
  }

  _markActiveDot() {
    const refs = this._paginationElem.querySelectorAll(".slider__ref");

    if (this._prevSlideIndex !== null) {
      const prevRef = refs[this._prevSlideIndex];
      prevRef.classList.remove("slider__ref_active");
    }

    const currentRef = refs[this._curSlideIndex];
    currentRef.classList.add("slider__ref_active");
  }

  _setupOnTouch() {
    const sliderInner = this._sliderElem.querySelector(".slider__inner");
    sliderInner.addEventListener(
      "touchmove",
      function onTouchSlider(ev) {
        ev.preventDefault();
        let touches = ev.changedTouches;
        for (var i = 0; i < touches.length; i++) {
          console.log(touches[i].clientX);
          sliderInner.style.right = `${sliderInner.style.right +
            touches[i].clientX}px`;
        }
      },
      false
    );
  }
}

export function init() {
  document.querySelectorAll(".slider").forEach(slider => {
    new Slider(slider);
  });
}
