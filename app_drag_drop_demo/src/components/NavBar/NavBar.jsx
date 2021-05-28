import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import './NavBar.css';

export const NavBar = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return(
        <Nav className='navbar'>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                MyGames
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Choice A Game</DropdownItem>
                    <DropdownItem href="/">Pathfinder</DropdownItem>
                    <DropdownItem>D&D</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavItem>
                <NavLink href="/join">
                    Join
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/account">
                    Account
                </NavLink>
            </NavItem>
        </Nav>
    );


}