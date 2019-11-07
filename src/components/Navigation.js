import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const style = {
    fontSize: "1em"
  }

  // inline js styles - link
  const link = {
    textDecoration: 'none',
    background: 'none',
    color: 'black',
    padding: '0 8px 0 8px'
  }

  return (
    <div>
      {/* replaced background color with prop from index.js */}
      <Navbar color={props.color} style={style} dark expand="md">
        <NavbarBrand>
          <Link to='/' style={link}>LaunchPad</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                {/* hide this and use navbar_brand as home link */}
                <Link to='/' style={link}>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/route-1' style={link}>Route 1</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/route-2' style={link}>Route 2</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/todo' style={link}>ToDo</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/customNav' style={link}>Nav</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/notfound' style={link}>404</Link>
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Testing
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  RTG Demo
                </DropdownItem>
                <DropdownItem>
                  Custom Nav
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;