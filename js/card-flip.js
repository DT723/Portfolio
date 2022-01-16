const card = document.querySelector(".flip-card-inner");
const cardback = document.querySelector(".flip-card-back");
const cardfront = document.querySelector(".flip-card-front");

card.addEventListener("click", function () {
  // card.classList.toggle("flip");
  console.log(cardback.style.transform);
  if (cardback.style.transform === "rotateY(0deg)") {
    cardback.style.transform = "rotateY(180deg)";
    cardfront.style.transform = "rotateY(0)";
  } else {
    cardback.style.transform = "rotateY(0)";
    cardfront.style.transform = "rotateY(-180deg)";
  }
});