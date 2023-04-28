document
  .querySelector(".header-nav-switch")
  .addEventListener("click", () =>
    document.querySelector(".header-nav-menu-m").classList.toggle("active")
  );
document
  .querySelector(".header-nav-switch")
  .addEventListener("click", () =>
    document.querySelector(".header-nav-switch").classList.toggle("active")
  );

document
  .getElementById("services-cta-window-cleaning")
  .addEventListener("click", () => {
    document
      .querySelector(".services-content-window-cleaning")
      .classList.add("active");
    document
      .querySelector(".services-content-pressure-washing")
      .classList.remove("active");
    document
      .querySelector(".services-content-gutter-cleaning")
      .classList.remove("active");
    document
      .querySelector(".services-content-house-keeping")
      .classList.remove("active");

    document
      .getElementById("services-cta-window-cleaning")
      .classList.add("active");
    document
      .getElementById("services-cta-pressure-washing")
      .classList.remove("active");
    document
      .getElementById("services-cta-gutter-cleaning")
      .classList.remove("active");
    document
      .getElementById("services-cta-house-keeping")
      .classList.remove("active");
  });

document
  .getElementById("services-cta-pressure-washing")
  .addEventListener("click", () => {
    document
      .querySelector(".services-content-window-cleaning")
      .classList.remove("active");
    document
      .querySelector(".services-content-pressure-washing")
      .classList.add("active");
    document
      .querySelector(".services-content-gutter-cleaning")
      .classList.remove("active");
    document
      .querySelector(".services-content-house-keeping")
      .classList.remove("active");

    document
      .getElementById("services-cta-window-cleaning")
      .classList.remove("active");
    document
      .getElementById("services-cta-pressure-washing")
      .classList.add("active");
    document
      .getElementById("services-cta-gutter-cleaning")
      .classList.remove("active");
    document
      .getElementById("services-cta-house-keeping")
      .classList.remove("active");
  });

document
  .getElementById("services-cta-gutter-cleaning")
  .addEventListener("click", () => {
    document
      .querySelector(".services-content-window-cleaning")
      .classList.remove("active");
    document
      .querySelector(".services-content-pressure-washing")
      .classList.remove("active");
    document
      .querySelector(".services-content-gutter-cleaning")
      .classList.add("active");
    document
      .querySelector(".services-content-house-keeping")
      .classList.remove("active");

    document
      .getElementById("services-cta-window-cleaning")
      .classList.remove("active");
    document
      .getElementById("services-cta-pressure-washing")
      .classList.remove("active");
    document
      .getElementById("services-cta-gutter-cleaning")
      .classList.add("active");
    document
      .getElementById("services-cta-house-keeping")
      .classList.remove("active");
  });

document
  .getElementById("services-cta-house-keeping")
  .addEventListener("click", () => {
    document
      .querySelector(".services-content-window-cleaning")
      .classList.remove("active");
    document
      .querySelector(".services-content-pressure-washing")
      .classList.remove("active");
    document
      .querySelector(".services-content-gutter-cleaning")
      .classList.remove("active");
    document
      .querySelector(".services-content-house-keeping")
      .classList.add("active");

    document
      .getElementById("services-cta-window-cleaning")
      .classList.remove("active");
    document
      .getElementById("services-cta-pressure-washing")
      .classList.remove("active");
    document
      .getElementById("services-cta-gutter-cleaning")
      .classList.remove("active");
    document
      .getElementById("services-cta-house-keeping")
      .classList.add("active");
  });
