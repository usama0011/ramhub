import React from "react";
import Wrapper from "../components/wrapper/Wrapper";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section class="py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6 col-xl-5">
              <img
                class="img-fluid rounded"
                loading="lazy"
                src="https://bootstrapbrain.com/demo/components/abouts/about-1/assets/img/about-img-1.jpg"
                alt=""
              />
            </div>
            <div class="col-12 col-lg-6 col-xl-7">
              <div class="row justify-content-xl-center">
                <div class="col-12 col-xl-11">
                  <h2 class="h1 mb-3">Who Are We?</h2>

                  <p class="mb-5">
                    REAM HUB (SMC-PVT) LTD is a well-established printing paper
                    manufacturing company based in Lahore, Pakistan. We have
                    been in business since 2017, and we’re continuing to grow
                    steadily, having reached 15+ cities in the 6 years since our
                    inception. Over the years, we have evolved along with our
                    customer's needs to offer everything from offset imported to
                    local paper — and everything in between.
                  </p>
                  <p class="mb-5">
                    We pride ourselves on our attention to detail, our
                    ever-improving technology, and our technical and creative
                    expertise. We use all this to ensure that your printing is
                    of the highest quality, helping you put your best foot
                    forward when talking to prospects.
                  </p>
                  <Link
                    target="_blank"
                    to={`https://wa.me/+923157129738`}
                    style={{ textDecoration: "none", color: "unset" }}
                  >
                    <button
                      style={{
                        padding: "15px 25px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Contact Us
                    </button>
                  </Link>
                  {/* <div class="row gy-4 gy-md-0 gx-xxl-5X">
                    <div class="col-12 col-md-6">
                      <div class="d-flex">
                        <div class="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-gear-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                          </svg>
                        </div>
                        <div>
                          <h4 class="mb-3">Versatile Brand</h4>
                          <p class="text-secondary mb-0">
                            We are crafting a digital method that subsists life
                            across all mediums.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="d-flex">
                        <div class="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-fire"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                          </svg>
                        </div>
                        <div>
                          <h4 class="mb-3">Digital Agency</h4>
                          <p class="text-secondary mb-0">
                            We believe in innovation by merging primary with
                            elaborate ideas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <section className="wrapper background">
              <h1 style={{ fontWeight: "bold", marginBottom: 30 }}>
                Our Customers
              </h1>
              <Container>
                <Row>
                  <Col
                    md={3}
                    sm={5}
                    xs={9}
                    style={{ backgroundColor: "" }}
                    className="feature"
                    key={1}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: 260,
                        borderRadius: 10,
                        objectFit: "contain",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBQJJRaDxeUw5eg_ZjYxEnOJrvhStn-LqfA&usqp=CAU"
                      alt=""
                    />
                  </Col>
                  <Col
                    md={3}
                    sm={5}
                    xs={9}
                    style={{ backgroundColor: "" }}
                    className="feature"
                    key={1}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: 260,
                        borderRadius: 10,
                        objectFit: "contain",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXoAkUwS9TAONmtm9cPHDiyXvQJ-jBEq6LQ&usqp=CAU"
                      alt=""
                    />
                  </Col>
                  <Col
                    md={3}
                    sm={5}
                    xs={9}
                    style={{ backgroundColor: "" }}
                    className="feature"
                    key={1}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: 260,
                        borderRadius: 10,
                        objectFit: "contain",
                      }}
                      src="https://www.intelregion.com/wp-content/uploads/2021/02/COMSATS.jpg"
                      alt=""
                    />
                  </Col>
                  <Col
                    md={3}
                    sm={5}
                    xs={9}
                    style={{ backgroundColor: "" }}
                    className="feature"
                    key={1}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: 260,
                        borderRadius: 10,
                        objectFit: "contain",
                      }}
                      src="https://logosandtypes.com/wp-content/uploads/2021/02/Allied-Bank.png"
                      alt=""
                    />
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
