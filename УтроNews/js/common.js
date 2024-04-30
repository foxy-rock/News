const burger = document.querySelector(".header__burger");
const headerBody = document.querySelector(".nav ");

burger.addEventListener("click", function () {
  headerBody.classList.toggle("open");
  burger.classList.toggle("open");
});

let inputBtn = document.querySelector(".search-form");
let searchBtn = document.querySelector(".search-btn ");

searchBtn.addEventListener("click", function () {
  inputBtn.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  let click = e.composedPath().includes(inputBtn);
  if (!click) {
    inputBtn.classList.remove("active");
  }
});

const hideNav = () => {
  const hiddenNavClassName = "navigation__hidden";
  const fixedNavClassName = "navigation__fixed";
  const headerHeight = 100;
  const navHeight = 42;
  let initialYvalue = window.scrollY;
  let body = document.querySelector("body");

  let isItHidden = false;
  let isItFixed = false;

  window.addEventListener("scroll", (ev) => {
    const scrollY = window.scrollY;
    if (scrollY > headerHeight) {
      makeItFixed();

      if (scrollY > headerHeight + navHeight && scrollY > initialYvalue) {
      } else {
        show();
      }
    } else {
      makeItNotFixed();
    }

    initialYvalue = scrollY;
  });

  function show() {
    if (isItHidden) {
      body.classList.remove(hiddenNavClassName);
      isItHidden = false;
    }
  }

  function makeItFixed() {
    if (!isItFixed) {
      body.classList.add(fixedNavClassName);
      isItFixed = true;
    }
  }

  function makeItNotFixed() {
    if (isItFixed) {
      body.classList.remove(fixedNavClassName);
      isItFixed = false;
    }
  }
};

hideNav();
