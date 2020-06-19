import React from 'react';
import PropTypes from 'prop-types';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';
import {
  Input,
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

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><i className="fab fa-instagram"></i></NavbarBrand>
        <NavbarBrand><span className="separator"></span></NavbarBrand>
        {/* <NavbarBrand href="/"><span className="instagram-text">Instagram</span></NavbarBrand> */}
        <NavbarBrand href="/"><img className="img-instagram-logo" alt="instagram logo" src={IGLogo}/></NavbarBrand>
        <Input
          className="search-input-field"
          placeholder="search"
          onChange={this.props.changeFilterText}
          value={this.props.filterText}
        />
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/"><i className="far fa-compass"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><i className="far fa-heart"></i></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i className="far fa-user"></i>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string,
  changeFilterText: PropTypes.func,
};