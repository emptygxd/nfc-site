const btn = document.querySelector(".product-button"),
  popup = document.querySelector(".pop-up"),
  content = document.querySelector(".content");

document.addEventListener("click", (e) => {
  if (e.target === btn) {
    content.classList.add("blur");
    popup.classList.add("show");
  } else if (e.target !== popup) {
    popup.classList.remove("show");
    content.classList.remove("blur");
    console.log("first");
  }
});
