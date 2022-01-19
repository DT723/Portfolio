const card = document.querySelectorAll(".flip-card-inner");
const cardback = document.querySelectorAll(".flip-card-back");
const cardfront = document.querySelectorAll(".flip-card-front");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    if (cardback[i].style.transform === "rotateY(0deg)") {
      cardback[i].style.transform = "rotateY(180deg)";
      cardfront[i].style.transform = "rotateY(0)";
    } else {
      cardback[i].style.transform = "rotateY(0)";
      cardfront[i].style.transform = "rotateY(-180deg)";
    }
  });
}

// const card = document.querySelector(".flip-card-inner");
// const cardback = document.querySelector(".flip-card-back");
// const cardfront = document.querySelector(".flip-card-front");

// card.addEventListener("click", function () {
//   // card.classList.toggle("flip");
//   // console.log(cardback[i].style.transform);
//   if (cardback.style.transform === "rotateY(0deg)") {
//     cardback.style.transform = "rotateY(180deg)";
//     cardfront.style.transform = "rotateY(0)";
//   } else {
//     cardback.style.transform = "rotateY(0)";
//     cardfront.style.transform = "rotateY(-180deg)";
//   }
// });
