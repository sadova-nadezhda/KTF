export function accordionInit() {
  const items = document.querySelectorAll(".accordion__item");

  items.forEach((el) => {
    el.addEventListener("click", function () {
      this.classList.toggle("active");
      let accBody = this.querySelector(".accordion__body");
      if (accBody.style.maxHeight) {
        accBody.style.maxHeight = null;
        accBody.style.paddingBottom = 0;
      } else {
        accBody.style.maxHeight = accBody.scrollHeight + 22 + "px";
        accBody.style.paddingBottom = 22 + "px";
      }
    });
  });
}