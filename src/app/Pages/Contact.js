import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import TopNavbar from "../Components/Header/TopNavbar";

function Contact() {
  return (
    <>
      <TopNavbar />
      <Container>
        <div className="w-50 mx-auto my-5">
          <h3 className="text-center">Contact Us</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <textarea
                  className="form-control"
                  rows={5}
                  style={{ resize: "none" }}
                  placeholder="Your message"
                ></textarea>
              </Form.Group>
              <div className="text-center">
                <Button type="Submit" variant="dark">
                  Send Message
                </Button>
              </div>
            </Form> 
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
