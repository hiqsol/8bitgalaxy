import React, {useState, useEffect} from "react";

function usePosition(y = 0, x = 0) {
  const [position, setPosition] = useState({y: 0, x: 0});
  const [m] = useState(50);

  useEffect(() => {
    setPosition({y: y * m, x: x * m});
  }, [y, x, m]);

  return [
    position,
    m,
  ];
}

export default usePosition;