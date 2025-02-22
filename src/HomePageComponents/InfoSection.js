import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoSection = () => {
  return (
    <div className="container p-4 bg-white rounded shadow-lg d-flex flex-wrap justify-content-between align-items-center gap-4">
      {/* Location */}
      <div className="d-flex align-items-center gap-3 border-start ps-3">
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z7UBSTO_YEiK214d/vuesax-l.png"
          alt="Location"
          className="img-fluid"
          style={{ width: "32px", height: "32px" }}
        />
        <div>
          <p className="fw-medium text-dark m-0">Местоположение</p>
          <p className="text-muted m-0">гр.Варна</p>
        </div>
      </div>

      {/* Work Hours */}
      <div className="d-flex align-items-center gap-3 border-start ps-3">
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z7UBSTO_YEiK214d/vuesax-l-2.png"
          alt="Calendar"
          className="img-fluid"
          style={{ width: "32px", height: "32px" }}
        />
        <div>
          <p className="fw-medium text-dark m-0">Работно време</p>
          <p className="text-muted m-0">От Пон. до Петък/12:00-20:00</p>
        </div>
      </div>

      {/* Confirmation */}
      <div className="d-flex align-items-center gap-3 border-start ps-3">
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z7UBSTO_YEiK214d/vuesax-b.png"
          alt="Call"
          className="img-fluid"
          style={{ width: "35px", height: "32px" }}
        />
        <div>
          <p className="fw-medium text-dark m-0">Потвърждения</p>
          <p className="text-muted m-0">До 24 часа</p>
        </div>
      </div>

      {/* Button */}
      <Button className="btn btn-primary fw-bold px-4 py-2">НАУЧИ ПОВЕЧЕ</Button>
    </div>
  );
};

export default InfoSection;
