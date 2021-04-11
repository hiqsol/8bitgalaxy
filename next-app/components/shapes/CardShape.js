import react from "react";
import styled from "styled-components";

const CardView = styled.div`
    position: absolute;
    border: 1px solid black;
    border-radius: 20px;
    padding: 0;
    margin: 0;
    box-shadow: 0 0 10px black;
    z-index: 3;
    width: 200px; 
    height: 350px;
`;

const CardShape = props => {
  return (
    <CardView>
      CARD
    </CardView>
  );
};

export default CardShape;