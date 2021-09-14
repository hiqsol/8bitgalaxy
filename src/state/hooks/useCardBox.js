import { useState, useRef } from "react";

function useCardBox() {
  const [isFocusedCard, setFocusCard] = useState(false);
  let timeout = useRef();

  console.log("render useCardBox");

  const mouseOverCard = (e) => {
    clearTimeout(timeout.current);
    setFocusCard(false);

    if (
      e.target.classList.value.includes("Value") ||
      e.target.classList.value.includes("Cooperation")
    ) {
      let findActiveCard = document.querySelector(".ActiveCard");
      if (!findActiveCard) return;
      findActiveCard.classList.remove("ActiveCard");
    }

    if (!e.target.classList.value.includes("Specs")) {
      return;
    }

    timeout.current = setTimeout(function () {
      setFocusCard(true);
      if (e.target.parentNode.classList.value.includes("Card")) {
        e.target.parentNode.classList.add("ActiveCard");
      }
    }, 1000);
  };

  const mouseLeaveCard = (e) => {
    clearTimeout(timeout.current);
    setFocusCard(false);
    if (e.target.parentNode.classList.value.includes("Card")) {
      e.target.parentNode.classList.remove("ActiveCard");
    }
  };

  return { mouseOverCard, mouseLeaveCard, isFocusedCard };
}
export default useCardBox;
