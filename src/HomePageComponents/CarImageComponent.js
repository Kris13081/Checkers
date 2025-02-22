import React from 'react';
import { Image } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const CarImageComponent = ({ src = "https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/audi-1.png", width = 813, height = 359, alt = "Car Image" }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="img-fluid"
        style={{ maxWidth: '100%', objectFit: 'contain' }}
      />
    </div>
  );
};

export default CarImageComponent;

