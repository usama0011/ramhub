import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import BrandImage from "../../assets/transparent.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <img
                src={BrandImage}
                style={{ width: "30px", height: "30px" }}
                alt=""
              />
              <h1>RemHub</h1>
            </div>
            <p>
              REAM HUB (SMC-PVT) LTD is a well-established printing paper
              manufacturing company based in Lahore, Pakistan. We have been in
              business since 2017, and we’re continuing to grow steadily, having
              reached 15+ cities in the 6 years since our inception.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                PHA Flats Wafaqi Colony Near G-1 Market, Johar Town, Lahore{" "}
              </li>
              <li>Email: reamhubofficial@gmail.com</li>
              <li>Phone: 0315-7129738</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
