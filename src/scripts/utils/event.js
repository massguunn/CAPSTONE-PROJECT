class Event {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.track = document.querySelector(".carousel__track");
      this.slides = Array.from(this.track.children);
      this.nextButton = document.querySelector(".carousel__button--right");
      this.prevButton = document.querySelector(".carousel__button--left");
      this.dotsNav = document.querySelector(".carousel__nav");
      this.dots = Array.from(this.dotsNav.children);
      this.slideWidth = this.slides[0].getBoundingClientRect().width;

      // Arrange the slides next to one another
      this.slides.forEach(this.setSlidePosition.bind(this));

      // Add event listeners
      this.prevButton.addEventListener(
        "click",
        this.handlePrevClick.bind(this)
      );
      this.nextButton.addEventListener(
        "click",
        this.handleNextClick.bind(this)
      );
      this.dotsNav.addEventListener("click", this.handleDotClick.bind(this));
    });
  }

  setSlidePosition(slide, index) {
    slide.style.left = this.slideWidth * index + "px";
  }

  moveToSlide(currentSlide, targetSlide) {
    this.track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  }

  updateDots(currentDot, targetDot) {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  }

  hideShowArrows(targetIndex) {
    if (targetIndex === 0) {
      this.prevButton.classList.add("is-hidden");
      this.nextButton.classList.remove("is-hidden");
    } else if (targetIndex === this.slides.length - 1) {
      this.prevButton.classList.remove("is-hidden");
      this.nextButton.classList.add("is-hidden");
    } else {
      this.prevButton.classList.remove("is-hidden");
      this.nextButton.classList.remove("is-hidden");
    }
  }

  handlePrevClick() {
    const currentSlide = this.track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = this.dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = this.slides.findIndex((slide) => slide === prevSlide);

    this.moveToSlide(currentSlide, prevSlide);
    this.updateDots(currentDot, prevDot);
    this.hideShowArrows(prevIndex);
  }

  handleNextClick() {
    const currentSlide = this.track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = this.dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = this.slides.findIndex((slide) => slide === nextSlide);

    this.moveToSlide(currentSlide, nextSlide);
    this.updateDots(currentDot, nextDot);
    this.hideShowArrows(nextIndex);
  }

  handleDotClick(e) {
    const targetDot = e.target.closest("button");

    if (!targetDot) return;

    const currentSlide = this.track.querySelector(".current-slide");
    const currentDot = this.dotsNav.querySelector(".current-slide");
    const targetIndex = this.dots.findIndex((dot) => dot === targetDot);
    const targetSlide = this.slides[targetIndex];

    this.moveToSlide(currentSlide, targetSlide);
    this.updateDots(currentDot, targetDot);
    this.hideShowArrows(targetIndex);
  }
}

export default Event;
