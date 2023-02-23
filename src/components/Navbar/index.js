import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/tic-tac-toe" activeStyle>
                        Tic Tac Toe
                    </NavLink>
                    <NavLink to="/project1" activeStyle>
                        Project 1
                    </NavLink>
                    <NavLink to="/calculator" activeStyle>
                        Calculator
                    </NavLink>
                    <NavLink to="/weather" activeStyle>
                        Wea&shy;ther
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
