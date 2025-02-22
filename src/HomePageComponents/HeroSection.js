import React from "react";
import {Row, Col, Button } from "react-bootstrap";
import CarImage from "../HomePageComponents/CarImage";

const HeroSection = () => {
  var title = "Избери, резервирай и провери своят автомобил";
  var subtitle = "Най-сигурната проверка на автомобили!";
  var buttonText = "Запиши се";
  return (
    <div className="my-5 ">
      <Row className="align-items-center mt-3 pt-3">
        <Col md={6} className="text-center text-md-left">
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-12">
                <div className="d-flex flex-column align-items-center gap-2">
                  {/* Main Title */}
                  <h1
                    className="fw-semibold"
                    style={{
                      fontSize: "48px",
                      lineHeight: "100%",
                      color: "#272727",
                      maxWidth: "566px",
                    }}
                  >
                    {title}{" "}
                    <span
                      style={{
                        color: "#1572d3",
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      Лесно
                      <img
                        src="https://dashboard.codeparrot.ai/api/image/Z7PAvjO_YEiK21yT/vector-1.png"
                        alt=""
                        style={{
                          position: "absolute",
                          bottom: "-20px",
                          left: "0",
                          width: "134px",
                          height: "20px",
                        }}
                      />
                    </span>
                  </h1>
                  {/* CTA Button */}
                  <Button
                    className="text-uppercase fw-bold mt-3 p-2 w-50"
                    style={{
                      backgroundColor: "#1572d3",
                      border: "none",
                      width: "250px",
                      height: "50px",
                      borderRadius: "8px",
                      fontSize: "18px",
                    }}
                    href="/calendar"
                  >
                    {buttonText}
                  </Button>
                  {/* Subtitle */}
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "150%",
                      color: "#272727",
                      maxWidth: "390px",
                    }}
                  >
                    {subtitle}
                  </p>
                  {/* Bottom Image */}
                  <img
                    src="https://dashboard.codeparrot.ai/api/image/Z7PAvjO_YEiK21yT/frame-2.png"
                    alt="Car illustration"
                    style={{
                      maxWidth: "259px",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <CarImage />
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
