const card = document.getElementById("card");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  card.classList.remove("close");
  card.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  card.classList.remove("open");
  card.classList.add("close");
});
