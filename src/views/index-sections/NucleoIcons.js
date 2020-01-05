import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  let styles = {
    width: '35%',
  };
  let style2 = {
    width: '20%',
  };
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
          <Col lg="6" md="12">
              <img
                alt="..."
                className="rounded-circle img-fluid img-raised mx-auto d-block"
                style={styles}
                src={require("assets/img/globe.png")}
              ></img>
              <h2 className="title text-center">Nucleo Icons</h2>
              <h5 className="description">
              Work towards becoming the fastest growing IT Company in India, in terms of consulting, services and project delivery.
              </h5>
            </Col>
            <Col lg="6" md="12">
            <img
                alt="..."
                className="rounded-circle img-fluid mx-auto d-block"
                style={styles}
                src={require("assets/img/mobilepctab.png")}
              ></img>
              <h2 className="title text-center">Nucleo Icons</h2>
              <h5 className="description">
              To deliver perfectly designed, cost effective solutions across multiple technologies, on time every time.
              </h5>
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12">
            <img
                alt="..."
                className="rounded-circle img-fluid img-raised mx-auto d-block"
                style={style2}
                src={require("assets/img/time.png")}
              ></img>
              <h2 className="title text-center">Nucleo Icons</h2>
              <h5 className="description">
                We aim to give our employees every chance to flourish in their careers and grow as part of a 
                global company, At MV Data Systems, we believe that an organization is only as successful as 
                the people within it. We offer services that span the entire spectrum of software applications 
                on various platforms from inception to deployment coupled with proven development methodologies
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
