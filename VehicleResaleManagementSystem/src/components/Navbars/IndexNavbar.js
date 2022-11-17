import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor] = React.useState("navbar-dark");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
    
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="pages/search_page.html"
              target="_blank"
              id="navbar-brand"
            >
              <NavLink
              className="Search"
              activeClassName="is-active"
              to="/Search" tag={Link}
              exact
              >

              <b>SEARCH</b></NavLink>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              SEARCH FOR YOUR DESIRED CAR AND BIKE
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <NavItem>
              <NavLink
              className="home"
              activeClassName="is-active"
              to="" tag={Link}
              exact
              >
	            <b>Home</b>
              </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="Registration_home"></i>
                  <p><b>Registration</b></p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem  to="/UserReg" tag={Link}>
                    <i className="user_Registration_home"></i>
                    User Registration
                  </DropdownItem>
                  <DropdownItem
                    to="/VehicleReg" tag={Link}>
                    <i className="vehicle_Registration_home"></i>
                    Vehicle Registration
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
               <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="Login_home"></i>
                  <p><b>Login</b></p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/UserLogin" tag={Link} >
                    <i className="user_Login_home"></i>
                    User Login
                  </DropdownItem>
                  <DropdownItem
                    to="/AdminLogin" tag={Link}>
                    <i className="admin_Login_home"></i>
                    Admin Login
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
              <NavLink
              className="changeowner"
              activeClassName="is-active"
              to="/OwnerShip" tag={Link}
              exact
              >
	            <b>Change Ownership</b>
              </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="selling_status"></i>
                  <p><b>Popular</b></p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/PopularCar" tag={Link}>
                    <i className="popular_car"></i>
                    Car
                  </DropdownItem>
                  <DropdownItem
                    to="/PopularBike" tag={Link}
                  >
                    <i className="Popular_bike"></i>
                    Bike
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
              <NavLink
              className="aboutus"
              activeClassName="is-active"
              to="/AboutUs" tag={Link}
              exact
              >
	            <b>About Us</b>
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink
              className="feedback"
              activeClassName="is-active"
              to="/FeedBack" tag={Link}
              exact
              >
	            <b>Feedback</b>
              </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
