/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import ContactUs from "../../views/index-sections/ContactUs";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <ContactUs/>
      <Container className="footer-top">
        {/* <nav>
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav> */}
        <div className="copyright text-center" id="copyright">
          ©{new Date().getFullYear()},{" "}
          <a
            href="#"
            target="_blank"
          >
            MVDatasystems
          </a>
          .2011-2020 All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
