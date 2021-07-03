import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Navbar() {
    //estilos del link de la navegacion
    const logoLink = {
        fontSize: "40px",
        textDecoration: "none",
        color: "#d9ebe9",
        fontFamily: "'Pacifico', 'cursive'"
    }
    const DIV_NAVBAR =styled.div`
        background-color: #000000;
        text-align: center;
    `;

    return (
        <DIV_NAVBAR>
            <Link to="/" style={logoLink}>Anime<span style={{color: "#798f8c"}}>Info</span></Link>
        </DIV_NAVBAR>
    );
}

export default Navbar;