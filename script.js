const buyItems = ["Laptop", "Headphones", "Keyboard"];
const sellItems = ["Phone", "Monitor", "Mouse"];

const buyList = document.getElementById("buyList");
const sellList = document.getElementById("sellList");

buyItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  buyList.appendChild(li);
});

sellItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  sellList.appendChild(li);
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
