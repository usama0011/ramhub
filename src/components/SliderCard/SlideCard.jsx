import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({ title, desc,descone, cover }) => {
  return (
    <Container className="box">
      <Row>
        <Col md={6}>
          <h1>{title}</h1>
          <p style={{marginBottom:0,paddingBottom:0}}>{descone}</p>
          <p>{desc}</p>
          <button type="button" style={{marginBottom:10}} class="btn btn-dark mt-10 mb-10">
            View More
          </button>
        </Col>
        <Col md={6}>
          <img style={{ borderRadius: "30px" }} src={cover} alt="#" />
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
