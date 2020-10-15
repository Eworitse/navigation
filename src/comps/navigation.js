import React from 'react';
import styled from 'styled-components';
import NavContextProvider from './navbarContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Brand from './navbarBrand';
import Nav from './nav';
import Hamburger from './hamburger';
import ToggleMenu from './toggleMenu';

const NavbarWrap = styled.div`
position: relative;
background-color: #227799;
`;

const NavbarContainer = styled(Container)`
background-color: ${props => props.bg || "transparent"};
position: relative;
padding: 10px 0px;
display: flex;
justify-content: space-between;
align-items: center;
`;


function Navbar(props) {
    return(
        // Add a bg prop with a value of background color to the NavbarWrap
        // component. Otherwise, the Navbar will be transparent
        // <NavbarWrap bg="#ff0000">

        <NavContextProvider>
            <NavbarWrap>
                <NavbarContainer bg="#227799">
                    <Brand />
                    <Nav />
                    <Hamburger />
                </NavbarContainer>
                <ToggleMenu />
            </NavbarWrap>
            
        </NavContextProvider>
        
    );
}

export default Navbar;