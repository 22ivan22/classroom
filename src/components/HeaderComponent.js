import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron } from "reactstrap";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar light className='navbar-custom  fixed-top shadow p-3' expand='md'>
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href='/'>
          <i className='fa fa-coffee'></i>
        </NavbarBrand>

        <Collapse isOpen={isOpen} navbar>
          <div className='container'>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/home'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/students'>Students</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </Navbar>
      <Jumbotron>
        <div className='row'>
          <div className='col-12'>&nbsp;</div>
        </div>
      </Jumbotron>
    </div>
  );
};
