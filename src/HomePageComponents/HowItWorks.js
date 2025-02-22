import React from 'react';
import { Button, Card } from 'react-bootstrap';

const HowItWorks = () => {
  const steps = [
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7egJ68BBwoP-o1m/vuesax-b.png",
      title: "Избери дата",
      description: "Избери най-удобният за теб ден"
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7egJ68BBwoP-o1m/vuesax-b-2.png", 
      title: "Попълни информацията",
      description: "Изберете нужната за Вас услуга и попълнете всяко информационно поле"
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7egJ68BBwoP-o1m/vuesax-b-3.png",
      title: "Очаквайте ни!",
      description: "Паркитайте автомобилът на удобно за Вас място, ние ще Ви открием!"
    }
  ];

  return (
    <div className="container py-5 text-center mt-5" style={{padding: '50px 20px'}}>
      <Button variant="light" className="mb-4 px-4 py-2 border-0 shadow-lg" style={{backgroundColor: '#E8F0FE', borderRadius: '8px', fontSize: '16px', fontWeight: '600', color: '#2C6BED'}}>
        КАК ПРОЦЕДИРАМЕ НИЕ
      </Button>
      
      <h2 className="fw-semibold mb-5" style={{fontSize: '42px', fontFamily: 'Poppins', fontStyle: 'italic', color: '#2C2C2C'}}>
        Запази своят час точно в 3 стъпки
      </h2>

      <div className="row justify-content-center">
        {steps.map((step, index) => (
          <div key={index} className="col-12 col-md-4 mb-4">
            <Card className="text-center border-0 bg-transparent" style={{borderRadius: '12px'}}>
              <Card.Body>
                <div className="d-flex shadow-lg justify-content-center align-items-center mx-auto mb-3" style={{width: '130px', height: '130px', backgroundColor: '#E8F0FE', borderRadius: '12px'}}>
                  <img 
                    src={step.icon}
                    alt={step.title}
                    className="img-fluid"
                    style={{width: '60px', height: '60px'}}
                  />
                </div>
                
                <Card.Title className="fw-bold mb-2" style={{fontSize: '20px', fontFamily: 'Poppins', fontStyle: 'italic', color: '#2C2C2C'}}>
                  {step.title}
                </Card.Title>
                
                <Card.Text className="text-muted" style={{fontSize: '16px', fontFamily: 'Poppins', lineHeight: '1.6'}}>
                  {step.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
