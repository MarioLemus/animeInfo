import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const DIV_NAVBAR =styled.div`
    background-color: #000000;
    text-align: center;
`;
const SPAN_LOGO = styled.span`
    color: #798f8c;
`;

function Navbar() {
    const logoLink = {
        fontSize: "40px",
        textDecoration: "none",
        color: "#d9ebe9",
        fontFamily: "'Pacifico', 'cursive'"
    }
    
    return (
        <DIV_NAVBAR>
            <Link to="/" style={logoLink}>Anime<SPAN_LOGO>Info</SPAN_LOGO></Link>
        </DIV_NAVBAR>
    );
}

export default Navbar;