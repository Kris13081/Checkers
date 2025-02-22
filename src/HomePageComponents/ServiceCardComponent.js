import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ServiceCardComponent = ({ icon, title, description }) => {
  return (
    <Card className="mb-4" style={{ border: 'none', backgroundColor: 'inherit' }}>
      <ListGroup horizontal className="align-items-center">
        <ListGroup.Item style={{ border: 'none', backgroundColor: 'inherit' }}>
          <div className="d-flex align-items-center justify-content-center" 
               style={{
                 width: '64px',
                 height: '64px',
                 backgroundColor: '#ECF5FF',
                 borderRadius: '16px'
               }}>
            <img 
              src={icon} 
              alt={title}
              width={24}
              height={24}
            />
          </div>
        </ListGroup.Item>
        <ListGroup.Item style={{ border: 'none', backgroundColor: 'inherit', flex: 1 }}>
          <div className="d-flex flex-column">
            <h5 className="mb-1" 
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 500,
                  lineHeight: '150%',
                  color: '#000000'
                }}>
              {title}
            </h5>
            <p className="mb-0"
               style={{
                 fontFamily: 'Poppins',
                 fontSize: '16px',
                 fontWeight: 400,
                 lineHeight: '150%',
                 color: '#6D6D6D'
               }}>
              {description}
            </p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

ServiceCardComponent.defaultProps = {
  icon: 'https://dashboard.codeparrot.ai/api/image/Z7kCdlCHtJJZ6v_p/vuesax-b.png',
  title: 'Service Title',
  description: 'Service description goes here'
};

export default ServiceCardComponent;

