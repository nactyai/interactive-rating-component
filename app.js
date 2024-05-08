const submit = document.getElementById("submit");
const ratingItems = document.querySelectorAll(".rating__items");
const result = document.querySelector(".which__selected");

let selected = null;

const previousRating = localStorage.getItem("previousRating");
if (previousRating) {
  const previousItem = document.querySelector(
    `.rating__items[data-rating="${previousRating}"]`
  );
  if (previousItem) {
    previousItem.classList.add("previous");
  }
}

Array.from(ratingItems).forEach((item) => {
  item.addEventListener("click", () => {
    ratingItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
    selected = item.textContent;
  });
});

submit.addEventListener("click", () => {
  if (!selected) {
    console.log("Please select a rating before submitting.");
  } else {
    console.log(`Submit rating: ${selected}`);
    result.textContent = `You selected ${selected} out of 5`;
    toggleBackside();

    localStorage.setItem("previousRating", selected);

    ratingItems.forEach((item) => {
      item.classList.remove("previous");
    });

    const selectedItem = document.querySelector(
      `.rating__items[data-rating="${selected}"]`
    );
    if (selectedItem) {
      selectedItem.classList.add("previous");
    }
  }
});

function toggleBackside() {
  const backSide = document.querySelector(".component__backside");
  const frontSide = document.querySelector(".component");
  if (backSide.style.display === "none" || backSide.style.display === "") {
    backSide.style.display = "block";
    frontSide.style.display = "none";
  } else {
    backSide.style.display = "none";
  }
}
