const mobileMenu = document.querySelector(".mobile-menu");
const menuclose = document.querySelector(".mobile-close");
const navList = document.querySelector(".nav_list");

const product = document.querySelector(".product");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");

const ProductDropdown = document.querySelector(".product_items");
const companyDropdown = document.querySelector(".company_items");
const connectDropdown = document.querySelector(".connect_items");

mobileMenu.addEventListener("click", function () {
  navList.classList.toggle("show");
  mobileMenu.classList.add("hide");
  menuclose.classList.remove("hide");
});

menuclose.addEventListener("click", function () {
  navList.classList.toggle("show");
  mobileMenu.classList.remove("hide");
  menuclose.classList.add("hide");
});

product.addEventListener("click", function () {
  ProductDropdown.classList.toggle("hide");
  companyDropdown.classList.add("hide");
  connectDropdown.classList.add("hide");
  product.classList.toggle("active_color");
  company.classList.remove("active_color");
  connect.classList.remove("active_color");
  product.classList.toggle("uparrow");
  company.classList.remove("uparrow");
  connect.classList.remove("uparrow");
});

company.addEventListener("click", function () {
  ProductDropdown.classList.add("hide");
  companyDropdown.classList.toggle("hide");
  connectDropdown.classList.add("hide");
  product.classList.remove("uparrow");
  company.classList.toggle("uparrow");
  connect.classList.remove("uparrow");
  product.classList.remove("active_color");
  company.classList.toggle("active_color");
  connect.classList.remove("active_color");
});

connect.addEventListener("click", function () {
  ProductDropdown.classList.add("hide");
  companyDropdown.classList.add("hide");
  connectDropdown.classList.toggle("hide");
  product.classList.remove("uparrow");
  company.classList.remove("uparrow");
  connect.classList.toggle("uparrow");
  product.classList.remove("active_color");
  company.classList.remove("active_color");
  connect.classList.toggle("active_color");
});
