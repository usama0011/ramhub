import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";
import { Link } from "react-router-dom";

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handelAdd = (selectedProduct, quantity) => {
    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success("Product has been added to cart!");
  };

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={selectedProduct?.imgUrl} alt="" />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.productName}</h2>
            <div className="rate">
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <span>{selectedProduct?.avgRating} ratings</span>
            </div>
            <div className="info">
              <span className="price">${selectedProduct?.price}</span>
              <span>category:{selectedProduct?.category}</span>
            </div>
            <p>{selectedProduct?.shortDesc}</p>
            <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <Link
              target="_blank"
              to={`https://wa.me/+923157129738`}
              style={{ textDecoration: "none", color: "unset" }}
            >
              <button
                aria-label="Add"
                type="submit"
                className="add"
                onClick={() => handelAdd(selectedProduct, quantity)}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
                  alt=""
                  style={{
                    width: 30,
                    height: 30,
                    marginTop: 15,
                    marginRight: 10,
                    marginBottom: 15,
                  }}
                />
                Chat with Us
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
