import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function ContactUs() {
  return (
    <>
      <div>
        <Container className="text-center">
            <div className="contact-content">
                <div className="container">
					<h2 className="title">
						Send us a message
					</h2>
					<div className="row">
						<div className="col-md-6">
							<p className="description">
								Complete the form below. NERDbodies love online questions and comments about anything.
									<br/>
									<br/>
							</p>
							<form action="ContactHandler.asp" method="post" role="form" id="contact-form">
								<input type="hidden" name="CustID" value="53609"/>
								<input type="hidden" name="PIN" value="53609"/>
								<input type="hidden" name="LeadSource" id="LeadSource" value="NERDBody"/>
								<div className="form-group">
									<label for="name" className="bmd-label-floating">Your name</label>
									<input type="text" className="form-control" id="name" name="name"/>
								</div>
								<div className="form-group">
									<label for="exampleInputEmails" className="bmd-label-floating">Email address</label>
									<input type="email" className="form-control" id="email" name="email"/>
									<span className="bmd-help">We'll never share your email with anyone else.</span>
								</div>
								<div className="form-group">
									<label for="phone" className="bmd-label-floating">Phone</label>
									<input type="text" className="form-control" id="phone" name="phone"/>
								</div>
								<div className="form-group label-floating">
									<label className="form-control-label bmd-label-floating" for="message"> Your message</label>
									<textarea className="form-control" rows="6" id="message" name="message"></textarea>
								</div>
								<div className="submit text-center">
									<input type="submit" className="btn btn-primary btn-raised btn-round" value="Contact Us"/>
								</div>
							</form>
						</div>
						<div className="col-md-4 ml-auto">
							<div className="info info-horizontal">
								<div className="icon icon-primary">
                                    <i class="fas fa-map-marker-alt"></i>
								</div>
								<div className="description">
									<h4 className="info-title">Find us at the office</h4>
									<a href="#" target="_blank">
										<p> #101, Sri Vinayaka Heights <br/> Jubliee Hills, Hyderabad
										</p>
									</a>
								</div>
							</div>
							<div className="info info-horizontal">
								<div className="iconConUs">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
								</div>
								<div className="description">
									<h4 className="info-title">Give us a ring</h4>
									<p>
										<br/> <a href="tel:+919986677208">+91 998 6677 208</a>

									</p>
								</div>
							</div>
							<div className="info info-horizontal">
								<div className="icon icon-primary">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
								</div>
								<div className="description">
									<h4 className="info-title">Email us</h4>
									<p className="font-weight-bold mb-4">
										<a href="mailto:hr@mvdatasystems.com" className="email">hr@mvdatasystems.com</a>
									</p>
                                </div>
							</div>


						</div>
					</div>
				</div>
            </div>
        </Container>
      </div>
    </>
  );
}

export default ContactUs;
