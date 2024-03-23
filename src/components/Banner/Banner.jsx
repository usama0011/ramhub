import { Col, Container, Row } from "react-bootstrap";
import BannerImage from "../../assets/newonimg.jpeg";
import "./banner.css";
const Banner = ({title}) => {
    return ( 
        <div className="image-container">
            <img src={BannerImage} alt="Product-bg" />
            <div className="overlay">
                <Container>
                    <Row>
                        <Col>
                            <h2>{title}</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Banner;