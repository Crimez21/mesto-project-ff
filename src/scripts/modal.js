export function openPopup(dataPopup) {
  dataPopup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscKeyUp);
};
export function closePopup(dataPopup) {
  dataPopup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscKeyUp);
    };
    const handleEscKeyUp = (evt) => {
      if (evt.key === "Escape") {
        const popupOpen = document.querySelector(".popup_is-opened"); 
        closePopup(popupOpen);
      }
    };
    export function closeOverlayPopup(dataPopup) {
      dataPopup.addEventListener("mousedown", function (evt) {
        if (evt.target.classList.contains("popup")) {
          closePopup(dataPopup);
        }
      });
    }