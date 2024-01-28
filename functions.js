function accordionFeature() {
  let acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        let active = document.querySelectorAll(
          ".accordion-div .accordion.active"
        );
        for (let j = 0; j < active.length; j++) {
          active[j].classList.remove("active");
          active[j].nextElementSibling.style.maxHeight = null;
        }
        this.classList.toggle("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  let currentIndex = 0;
  function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 33.33}%)`;
  }

  window.nextSlide = function () {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
  };

  window.prevSlide = function () {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateCarousel();
  };

  setInterval(window.nextSlide, 3000);
});

function showBurgerMenu() {
  const burgerMenu = document.querySelector(".burger-menu");
  let isVisible = false;

  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("clicked");
    isVisible = !isVisible;
    const bmNav = document.querySelector(".bm-nav");
    bmNav.style.right = isVisible ? "0" : "-80%";
  });
}

accordionFeature();
showBurgerMenu();
