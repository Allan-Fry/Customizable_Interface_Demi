import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import './NavBar.css';
import { useSelector } from 'react-redux';

export const NavBar = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const games = useSelector(state => state.games)
    const renderedGame = games.map(game => (
        <DropdownItem href="/">{game.gameName}</DropdownItem>
    ));
    return(
        <Nav className='navbar'>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                MyGames
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Choice A Game</DropdownItem>
                    {renderedGame}
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