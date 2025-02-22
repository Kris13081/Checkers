import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const FooterCopyright = () => {
  return (
    <Container fluid className="py-3" style={{ backgroundColor: '#051c34' }}>
      <Row>
        <Col className="text-center">
          <hr className="border-secondary opacity-50" />
          <div className="text-light small mt-2" style={{ color: '#d6d6d6', fontFamily: 'Poppins', fontWeight: 400, fontSize: '12px', lineHeight: '150%' }}>
            Copyright 2023 ・ Rentcars, All Rights Reserved
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterCopyright;

