document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".mobile-header__menu");
  const mobileNav = document.querySelector(".mobile-header__nav");
  const mobileSearch = document.querySelector(".mobile-header__search-body");
  const mobileSearchBtn = document.querySelector(".mobile-header__search-btn");
  const mobileSearchCloseBtn = document.querySelector(".mobile-header__search-close");
  const mobileSearchContent = document.querySelector(".mobile-header__content");
  const mobileMenuItems = document.querySelectorAll(".mobile-header__nav-item");
  const mobileLogo = document.querySelector(".header-logo");
  const mobileTel = document.querySelector(".mobile-header__tel");
  const body = document.body;

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("open");
      mobileNav.classList.toggle("open");

      if (mobileSearch.classList.contains("open")) {
        mobileSearch.classList.remove("open");
      }

      if (mobileNav.classList.contains("open")) {
        body.classList.add("no-scroll");
      } else {
        body.classList.remove("no-scroll");
      }
    });
  }

  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener("click", function () {
      mobileSearch.classList.add("open");
      mobileLogo.classList.add("hidden");
      mobileTel.classList.add("hidden");
      menuToggle.classList.add("hidden");
      mobileSearchBtn.classList.add("hidden");
      mobileSearchCloseBtn.classList.remove("hidden");
      mobileSearchContent.classList.add("w-100");
    });
  }

  if (mobileSearchCloseBtn) {
    mobileSearchCloseBtn.addEventListener("click", function () {
      mobileSearch.classList.remove("open");
      mobileLogo.classList.remove("hidden");
      menuToggle.classList.remove("hidden");
      mobileTel.classList.remove("hidden");
      mobileSearchBtn.classList.remove("hidden");
      mobileSearchCloseBtn.classList.add("hidden");
      mobileSearchContent.classList.remove("w-100");
    });
  }

  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      body.classList.remove("no-scroll");
      menuToggle.classList.toggle("open");
      mobileNav.classList.toggle("open");
    });
  });
});
