const cardTemplate = document.querySelector("#card-template").content;
const  cardPlace = document.querySelector(".places__list");
function addCard(dataCard, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const removeButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardText = cardElement.querySelector(".card__title");
  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.name;
  cardText.textContent = dataCard.name;
  removeButton.addEventListener("click", deleteCard);
  return cardElement;
}

function removeCard(evt) {
  evt.target.closest(".card").remove();
}

initialCards.forEach(function (item) {
  const cardElement = addCard(item, removeCard);
  cardPlace.append(cardElement);
});
