import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({title,desc,cover}) => {
  return (
      <Container className='box' >
        <Row>
          <Col md={6}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button type="button" class="btn btn-dark">Dark</button>

          </Col>
          <Col md={6}>
            <img style={{borderRadius:'30px'}} src={cover} alt="#" />
          </Col>
        </Row>

    </Container>
  )
}

export default SlideCard
