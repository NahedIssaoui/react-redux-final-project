import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchAllCategories } from "../../slices/Category/CategorySlice";

function TopNavbar() {
  const { categories } = useSelector((state) => state.categories);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Navbar bg ='black'  expand="lg" variant="dark">
      <Container>
        <NavLink to={"/"} className={"navbar-brand"}>
          <img src="https://otakustore.net/wp-content/uploads/2022/03/otakustore_default.png" width="200" height="40"></img>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className="nav-link" style={{ fontWeight: "bold"}}>
              Home
            </NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown" style={{ fontWeight: "bold"}}>
              {categories &&
                categories.map((c, index) => {
                  return (
                    <Link to={`/category/${c}`}  className="text-capitalize dropdown-item" key={index}
                    >
                      {c}
                    </Link>
                  );
                })}
            </NavDropdown>
            <NavLink to={"/products"} className="nav-link" style={{ fontWeight: "bold" }}>
             All Products
            </NavLink>
            <NavLink to={"/contact"} className="nav-link" style={{ fontWeight: "bold"}}>
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;