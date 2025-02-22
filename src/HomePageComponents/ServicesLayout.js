import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderSection from './HeaderSection';
import ServiceCardComponent from './ServiceCardComponent';
import CarImageComponent from '../HomePageComponents/CarImageComponent';

const ServicesLayout = () => {
  return (
    <Container fluid style={{ width: '100%', minHeight: '100vh', padding: '2rem' }}>
      <Row className="d-flex align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <CarImageComponent src="https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/audi-1.png" width={813} height={359} />
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column">
          <HeaderSection />
          <Row>
            <Col className="d-flex flex-column">
              <ServiceCardComponent icon="https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/vuesax-b.png" title="Best price guaranteed" description="Find a lower price? We’ll refund you 100% of the difference." />
              <ServiceCardComponent icon="https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/vuesax-b-2.png" title="Experience driver" description="Don’t have driver? Don’t worry, we have many experienced driver for you." />
              <ServiceCardComponent icon="https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/vuesax-b-3.png" title="24 hour car delivery" description="Book your car anytime and we will deliver it directly to you." />
              <ServiceCardComponent icon="https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/vuesax-b-4.png" title="24/7 technical support" description="Have a question? Contact Rentcars support any time when you have problem." />
              <ServiceCardComponent icon="https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/vuesax-b-5.png" title="Best price guaranteed" description="Find a lower price? We’ll refund you 100% of the difference." />
              <ServiceCardComponent icon="https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/vuesax-b-6.png" title="Experience driver" description="Don’t have driver? Don’t worry, we have many experienced driver for you." />
              <ServiceCardComponent icon="https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/vuesax-b-7.png" title="24 hour car delivery" description="Book your car anytime and we will deliver it directly to you." />
              <ServiceCardComponent icon="https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/vuesax-b-8.png" title="24/7 technical support" description="Have a question? Contact Rentcars support any time when you have problem." />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesLayout;

