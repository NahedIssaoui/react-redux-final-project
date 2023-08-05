import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../Components/Cart/CartItemCard";
import Footer from "../Components/Footer/Footer";
import TopNavbar from "../Components/Header/TopNavbar";
import { TotalPrice} from "../slices/Cart/CartSelector";
import { cartState } from "../slices/Cart/CartSlice";

function Cart() {
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  const Total = TotalPrice(state);
  
  return (
    <>
      <TopNavbar />
      <Container>
        <Row>
          {!carts.length && (
            <div className="w-100 my-5 text-center text-danger">
              <h3>
                You don't have any product in carts.{" "}
                <Link to="/products" className="text-dark text-decoration-none">
                  {" "}
                  Go for shopping{" "}
                </Link>
              </h3>
            </div>
          )}
          {carts.length > 0 &&
            carts.map((c) => {
              return (
                <Col sm="12" lg="12" key={c.id} >
                  <CartItemCard item={c} />
                </Col>
              );
            })}
        </Row>

        {carts.length > 0 && (
          <div >
            <Card style={{backgroundColor:'#f2ead3',width: '200px' , marginLeft: 'auto'}}>
              <Card.Body >
                <div style={{color:'#f83e4b' }}>
                    <h5 >
                      Total Price: {Total} <h7>TND</h7>
                    </h5>
                  </div>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
