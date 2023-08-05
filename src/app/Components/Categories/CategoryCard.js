import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CategoryCard.css";
function CategoryCard({ category }) {
  return (
    <Link
      to={`category/${category}`}
      className="text-decoration-none text-dark"
    >
      <Card className="category" >
        <Card.Body className="custom-category-card" >
          <Card.Text className="text-capitalize">{category}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CategoryCard;
