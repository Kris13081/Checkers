import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import HeaderSection from './HeaderSection';
import ServiceCardComponent from './ServiceCardComponent';
import CarImageComponent from './CarImageComponent';
import './ServicesLayaut.css';
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    id: 1,
    title: "Pre-Purchase Inspection",
    emoji: "🛠️🚗",
    description: "За клиенти, които купуват употребяван автомобил – Защита от измами",
    details: [
      "Пълен OBD2 скенер",
      "Проверка на километража",
      "Проверка на състоянието на двигателя и трансмисията",
      "Тест на електрическата система",
      "Откриване на скрити удари",
      "Ендоскопска инспекция",
      "Кратко тестово шофиране",
    ],
    img: "https://dashboard.codeparrot.ai/api/image/Z7vUG1CHtJJZ6wG0/vuesax-b-3.png",
    price: "150–300 лева (BGN)",
  },
  {
    id: 2,
    title: "Full Vehicle Health Check",
    emoji: "🩺🚗",
    description: "Всеобхватна инспекция на автомобила за цялостно представяне и безопасност.",
    details: [
      "Пълен системен скенер",
      "Тест на инжекторите и запалителните бобини",
      "Тест на акумулатора и алтернатора с вълнова форма",
      "Проверка на спирачната система",
      "Инспекция на турбото и изпускателната система",
      "Диагностика на окачването и кормилната система",
      "Проверка на DPF/AdBlue (за дизелови двигатели)",
    ],
    img: "https://dashboard.codeparrot.ai/api/image/Z7vUG1CHtJJZ6wG0/heroicon-2.png",
    price: "180–350 лева (BGN)",
  },
  {
    id: 3,
    title: "Car Performance & Optimization",
    emoji: "⚡🏁",
    description: "За тези, които търсят по-добра икономия на гориво и по-гладко возене.",
    details: [
      "Нулиране на адаптацията на дроселната клапа и горивната система",
      "Нулиране и калибриране на адаптацията на трансмисията",
      "Оптимизация на ECU и калибриране на сензорите",
      "Регистрация на акумулатора и тест на зарядната система",
      "Тестване на представянето в реално време",
      "Нулиране на системата за мониторинг на налягането в гумите (TPMS)",
    ],
    img: "https://dashboard.codeparrot.ai/api/image/Z7vUG1CHtJJZ6wG0/heroicon.png",
    price: "120–250 лева (BGN)",
  },
  {
    id: 4,
    title: "Electrical & Hidden Issues",
    emoji: "🔌⚡",
    description: "За тези, които се сблъскват с електрически проблеми, разреждане на батерията или предупредителни лампи.",
    details: [
      "Пълен скенер на електрическата система",
      "Тест за паразитно разреждане на батерията",
      "Тестове за късо съединение и отворени вериги",
      "Проверка на предпазители и релета",
      "Тест на системата за ключ и имобилайзер",
    ],
    img: "https://dashboard.codeparrot.ai/api/image/Z7vUG1CHtJJZ6wG0/vuesax-b-2.png",
    price: "150–300 лева (BGN)",
  },
  {
    id: 5,
    title: "Business & Fleet Package",
    emoji: "🚛🛠️",
    description: "За компании с множество превозни средства, които изискват редовни проверки на състоянието.",
    details: [
      "Месечен пълен системен скенер и проверка на данни в реално време",
      "Кодиране и адаптация на ECU (по необходимост)",
      "Проверка на акумулатора, алтернатора и електрическата система",
      "Предпазно почистване на DPF (за дизелови превозни средства)",
      "Ендоскопски инспекции",
      "Скенер за въздушни възглавници и безопасност",
    ],
    img: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9140253d-871c-474b-9631-cec9279bbd94",
    price: "От 500 лева (BGN) на превозно средство годишно",
  },
  {
    id: 6,
    title: "Key & Security Programming",
    emoji: "🔑🚗",
    description: "За клиенти, които имат нужда от нови ключове, нулиране на имобилайзер или актуализации на сигурността.",
    details: [
      "Програмиране на ключове за дистанционно управление",
      "Нулиране и препрограмиране на имобилайзер",
      "Кодиране на ECU за разпознаване на ключа",
      "Активиране и конфигуриране на дистанционно стартиране",
      "Адаптация на одометър и клъстер",
      "Откриване на кражба и манипулации",
    ],
    img: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df46fc00-1fa2-4142-91a1-2b38e9eb625a",
    price: "150–400 лева (BGN)",
  },
];

const ServicesLayout = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleShowModal = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <Container fluid className="services-layout-container">
      <Row className="d-flex align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <CarImageComponent src="https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/audi-1.png" width={813} height={359} />
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column">
          <HeaderSection />
          <Row>
            <Col className="d-flex flex-column">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="service-card-container"
                  onClick={() => handleShowModal(service)} // Click to open modal
                >
                  <ServiceCardComponent
                    className="service-card"
                    icon={service.img}
                    title={service.title + " 🔍"} // Adding the down arrow symbol here
                    description={service.description + "..."}
                  />
                </div>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Enhanced Modal with Modern Design */}
      {selectedService && (
        <Modal
          show={true}
          onHide={handleCloseModal}
          centered
          className="service-modal"
          animation
          backdrop="static"
        >
          <Modal.Header
            closeButton
            className="modal-header"
          >
            <Modal.Title className="modal-title">
              <span className="modal-title-emoji">{selectedService.emoji}</span> {selectedService.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <h5>Oписание:</h5>
            <p>{selectedService.description}</p>

            <h5>Включени Услуги:</h5>
            <ul className="modal-service-details">
              {selectedService.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h5>Цена:</h5>
            <p className="service-price">{selectedService.price}</p>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button
              variant="primary"
              onClick={handleCloseModal}
              className="btn-back"
            >
              Назад
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ServicesLayout;
