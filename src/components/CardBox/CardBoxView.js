import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./CardBoxView.css";

const CardBoxView = ({ card, children }) => {
  let el = document.createElement("div");
  el.className = "modalContainer";

  useEffect(() => {
    let divContainer = document.querySelector(".ActiveCard");
    divContainer.appendChild(el);

    return () => {
      divContainer.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal">
      <div>Race: {card.Race}</div>
      <div>Type: {card.Type}</div>
      {card.Specs.Level && card.Specs.Level >= 0 && (
        <div>Level: {card.Specs.Level}</div>
      )}
      {card.Specs.Klass && <div>Klass: {card.Specs.Klass}</div>}
      {card.Specs.Attack >= 0 && <div>Attack: {card.Specs.Attack}</div>}
      {card.Specs.Cooperation && card.Specs.Colonization >= 0 && (
        <div>Colonization: {card.Specs.Colonization}</div>
      )}
      {card.Specs.Cooperation && card.Specs.Cooperation >= 0 && (
        <div>Cooperation: {card.Specs.Cooperation}</div>
      )}
      {card.Specs.Defense && card.Specs.Defense >= 0 && (
        <div>Defense: {card.Specs.Defense}</div>
      )}
      {children}
    </div>,
    el
  );
};

export default CardBoxView;