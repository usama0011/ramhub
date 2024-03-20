import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <section class="bg-light py-3 py-md-5">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h3 class="fs-12 text-secondary mb-2 text-uppercase text-center">
                CONTACT US
              </h3>
              <h2 class="display-5 mb-4 mb-md-5 text-center">
                We're always on the lookout to work with new clients.
              </h2>
              <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
              <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center">
                WORKING HOURS: 24 / 7 Hours (PAKISTANI TIME)
              </h3>
            </div>
          </div>
          <section style={{ backgroundColor: "unset" }} className="wrapper">
            <Container>
              <Row>
                <Col
                  md={3}
                  sm={5}
                  xs={9}
                  style={{ backgroundColor: "#fdefe6" }}
                  className="feature"
                  key={1}
                >
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
                      alt=""
                      style={{
                        width: 50,
                        height: 50,
                        marginTop: 15,
                        marginBottom: 15,
                      }}
                    />
                  </div>
                  <h3 class="fs-12">Whatsapp</h3>
                  <Link
                    target="_blank"
                    to={`https://wa.me/+923157129738`}
                    style={{ textDecoration: "none", color: "unset" }}
                  >
                    <p>0315-7129738</p>
                  </Link>
                  <p></p>
                </Col>
                <Col
                  md={3}
                  sm={5}
                  xs={9}
                  style={{ backgroundColor: "#ceebe9" }}
                  className="feature"
                  key={1}
                >
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5947/5947997.png"
                      alt=""
                      style={{
                        width: 50,
                        height: 50,
                        marginTop: 15,
                        marginBottom: 15,
                      }}
                    />
                  </div>
                  <h3>Call</h3>
                  <p style={{ marginBottom: 0 }}>0315-7129738</p>
                  <p style={{ marginTop: 0 }}>0344-8336733</p>
                  <p style={{ marginTop: 0 }}>0334-6861653</p>
                </Col>
                <Col
                  md={3}
                  sm={5}
                  xs={9}
                  style={{ backgroundColor: "#e2f2b2" }}
                  className="feature"
                  key={1}
                >
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                      alt=""
                      style={{
                        width: 50,
                        height: 50,
                        marginTop: 15,
                        marginBottom: 15,
                      }}
                    />
                  </div>
                  <h3>Email</h3>
                  <p>reamhubofficial@gmail.com</p>
                </Col>
              </Row>
            </Container>
          </section>
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="display-5 mb-4 mb-md-5 text-center">
                Our Company Details
              </h2>
              <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
              <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center">
                <span style={{ fontWeight: "bold" }}>Address:</span> PHA Flats
                Wafaqi Colony Near G-1 Market, Johar Town, Lahore
              </h3>
              <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center">
                <span style={{ fontWeight: "bold" }}>Incorporation NO#:</span>{" "}
                0226896
              </h3>
              <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center">
                <span style={{ fontWeight: "bold" }}>NTN No#:</span> 7057638
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
