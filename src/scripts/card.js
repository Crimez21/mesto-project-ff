export function addCard(dataCard, deleteCard, likeCard, imageOpenPopup) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const removeButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardText = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.name;
  cardText.textContent = dataCard.name;
  removeButton.addEventListener("click", deleteCard);
  likeButton.addEventListener("click", likeCard);
  cardImage.addEventListener("click", function () {
    imageOpenPopup(dataCard.name, dataCard.link);
  });
  return cardElement;
}
export function removeCard(evt) {
  evt.target.closest(".card").remove();
}
export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
