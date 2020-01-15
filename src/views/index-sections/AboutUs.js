import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function AboutUs() {
  return (
    <>
      <div className="section">
        <Container>
          <h2 className="title text-center">About Us</h2>
          <div id="typography" className=" text-justify">
            <Row>
              <Col md="12"  className="description">
                <div>
                  <h5>
                  MV Datasystems is a one stop shop solution provider company based in Hyderabad, India. 
                  MV Datasystems is a group of experienced team with passion for delivering superior solutions, 
                  products and customer services. Our Motto is to provide high quality service which results 
                  in soaring productivity. This service is spread across the globe.
                  </h5>
                </div>
                <div>
                  <h5>
                  We are passionate and committed team of professionals serving a range of Consulting, Research, 
                  Branding and Organization Development services, we focus on solving our client’s most challenging 
                  business issues with cross disciplinary approach that encompasses everything from Consulting Services, 
                  Market Research, Branding Services and Organization Building.
                  </h5>
                </div>
                <div>
                  <h5>
                  We work in small highly professional and cost effective teams, we thrive on ideology of being 
                  “Your Thought Leadership Partner” and specialized expertise enable us to serve a wide range of 
                  businesses and industries, our ambition is always to create the conditions for a sustained 
                  improvement in efficiency and financial performance. Our emphasis is on results and value for money.
                  </h5>
                </div>
                <div>
                  <h5>
                  Our operating model gives us the freedom to provide cutting edge solutions and advisory services at 
                  very reasonable price points, our MV Data Systems Advantage Program addresses the SME and Mid-size 
                  organizations needs in terms of laying down the foundation of long term and sustainable business by 
                  envisaging the overall growth requirements.
                  </h5>
                </div>
                <div>
                  <h5>
                  MV Datasystems is driven by a competent management and IT professionals. This amalgamation of unique 
                  and complementary strengths gives the company the essential edge to race ahead of its competition. 
                  The company has a sizeable area dedicated to its development activities and has the required team size 
                  to tackle all kinds of technology and business applications with complete ease.
                  </h5>
                </div>
                <div>
                <br></br>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                    "Customer service will always remain at the forefront of our Business, 
                    no matter what level of success we achieve. We will maintain same respect 
                    and passion for customer service" {" "}
                      <br></br>
                      {/* <small>-- Ponna Murali</small> */}
                    </p>
                  </blockquote>
                </div>
              </Col>
            </Row>
          </div>
          <div className="space-50"></div>
        </Container>
      </div>
    </>
  );
}

export default AboutUs;