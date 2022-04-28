// Write Javascript code here!
import "./style.css";

const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item");

wrapper.addEventListener("click", function (e) {
  const targetElem = e.target;
  if (!targetElem.classList.contains("item")) return;
  targetElem.classList.toggle("open");
  items.forEach(function (elem) {
    if (elem !== targetElem) elem.classList.remove("open");
  });
});

// items.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     item.classList.toggle("open");
//     items.forEach(function (elem) {
//       if (elem !== item) elem.classList.remove("open");
//     });
//   });
// });
