// const sliderNav = document.querySelector(".slider-nav");
// const sliderNavItems = document.querySelectorAll(".slider-nav a");
// let indexOfCurrentPanel = 0;
// let currentPanel = sliderNavItems[indexOfCurrentPanel];
// currentPanel.classList.add("selected");

// sliderNav.addEventListener("click", (e) => {
//   selectPanel(e.target);
// });

// const selectPanel = (panel) => {
//   if (panel.tagName == "A") {
//     sliderNavItems.forEach((item) => {
//       item.classList.remove("selected");
//     });
//     panel.classList.add("selected");
//   }
// };

// ABOUT EFFECT
// const aboutSection = document.querySelector(".about-wrapper");
// const servicesSection = document.querySelector(".services-wrapper");
// const features = document.querySelector(".features");

// const body = document.querySelector("body");
// const pageHeight = body.scrollHeight;
// let scrollVar = 0;
// window.addEventListener("scroll", () => {
//   scrollVar = body.scrollTop;
//   scrollVar = (scrollVar / pageHeight) * 100;
//   console.log(scrollVar);
//   if (scrollVar > 14) {
//     aboutSection.classList.add("show");
//     features.classList.add("show");
//   } else {
//     aboutSection.classList.remove("show");
//     features.classList.remove("show");
//   }

//   if (scrollVar > 50 && scrollVar > 15) {
//     servicesSection.classList.add("show");
//     aboutSection.classList.add("slide-up");
//   } else {
//     servicesSection.classList.remove("show");
//     aboutSection.classList.remove("slide-up");
//   }

//   if (scrollVar > 12) {
//   } else {
//   }
// });

window.addEventListener("load", () => {
  document.querySelector("#preloader").style.display = "none";
  document.body.style.overflow = "visible";
});
