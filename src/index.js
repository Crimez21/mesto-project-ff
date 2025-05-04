import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import { addCard, removeCard, likeCard } from "./scripts/card.js";
const cardPlace = document.querySelector(".places__list");
initialCards.forEach(function (item) {
  const cardElement = addCard(item, removeCard, likeCard, imageOpenPopup);
  cardPlace.append(cardElement);
});
function imageOpenPopup(nameImg, linkImg) {
  const popupImage = document.querySelector(".popup__image");
  const popupImageText = document.querySelector(".popup__caption");
  popupImage.src = linkImg;
  popupImageText.textContent = nameImg;
  popupImage.alt = nameImg;
  openPopup(imagePopup);
}

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const imagePopup = document.querySelector(".popup_type_image");
const ProfilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
import { closePopup, openPopup, closeOverlayPopup } from "./scripts/modal.js";

function addListener(dataPopup) {
  dataPopup.classList.add("popup_is-animated");
  const popupCloseButton = dataPopup.querySelector(".popup__close");
  popupCloseButton.addEventListener("click", function () {
    closePopup(dataPopup);
  });
}

addListener(ProfilePopup);
addListener(cardPopup);
addListener(imagePopup);

closeOverlayPopup(ProfilePopup);
closeOverlayPopup(cardPopup);
closeOverlayPopup(imagePopup);

editProfileButton.addEventListener("click", function () {
  openPopup(ProfilePopup);
});

const formElementProfile = ProfilePopup.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const initialName = document.querySelector(".profile__title").textContent;
const initialJob = document.querySelector(".profile__description").textContent;
nameInput.value = initialName;
jobInput.value = initialJob;
function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  const jobValue = jobInput.value;
  const nameValue = nameInput.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  closePopup(ProfilePopup);
}
formElementProfile.addEventListener("submit", handleFormSubmitProfile);

addCardButton.addEventListener("click", function () {
  openPopup(cardPopup);
});
const formElementCard = cardPopup.querySelector(".popup__form");

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const cardName = document.querySelector(".popup__input_type_card-name");
  const cardLink = document.querySelector(".popup__input_type_url");
  const newCardElem = { name: cardName.value, link: cardLink.value };
  const newCard = addCard(newCardElem, removeCard, likeCard);
  cardPlace.prepend(newCard);
  closePopup(cardPopup);
  cardName.value = "";
  cardLink.value = "";
}
formElementCard.addEventListener("submit", handleFormSubmitCard);
