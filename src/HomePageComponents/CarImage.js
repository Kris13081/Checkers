import React from "react";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CarImage = () => {
  return (
    <Image
      src="https://dashboard.codeparrot.ai/api/image/Z7O5HTO_YEiK21yL/car-2-1.png"
      alt="Car"
      fluid
      className="d-block mx-auto"
    />
  );
};

export default CarImage;
