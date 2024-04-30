const tabsTitle = document.querySelectorAll(".tab-title");
const tabsContent = document.querySelectorAll(".tab__content");

tabsTitle.forEach((item) =>
  item.addEventListener("click", (event) => {
    const tabsTitleTarget = event.target.getAttribute("data-tab");
    tabsTitle.forEach((element) => element.classList.remove("active-tab"));
    tabsContent.forEach((element) =>
      element.classList.add("hidden-tab-content")
    );
    item.classList.add("active-tab");
    document
      .getElementById(tabsTitleTarget)
      .classList.remove("hidden-tab-content");
  })
);

document.querySelector('[data-tab="tab-1"]').classList.add("active-tab");
document.querySelector("#tab-1").classList.remove("hidden-tab-content");

const tabsTitleMain = document.querySelectorAll(".tab-title__main");
const tabsContentMain = document.querySelectorAll(".tab__content-main");

tabsTitleMain.forEach((itemMain) =>
  itemMain.addEventListener("click", (event) => {
    const tabsTitleTargetMain = event.target.getAttribute("data-tab-main");
    tabsTitleMain.forEach((element) =>
      element.classList.remove("active-tab-main")
    );
    tabsContentMain.forEach((element) =>
      element.classList.add("hidden-tab-content-main")
    );
    itemMain.classList.add("active-tab-main");
    document
      .getElementById(tabsTitleTargetMain)
      .classList.remove("hidden-tab-content-main");
  })
);

document
  .querySelector('[data-tab-main="putin"]')
  .classList.add("active-tab-main");
document.querySelector("#putin").classList.remove("hidden-tab-content-main");
