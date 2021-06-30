import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Navbar() {
    //estilos del link de la navegacion
    const logoLink = {
        fontSize: "45px",
        textDecoration: "none",
        color: "#fff"
    }

    const DIV_NAVBAR =styled.div`
        background-color: red;
        text-align: center;
    `;
    return (
        <DIV_NAVBAR>
            <Link to="/" style={logoLink} >AnimeInfo</Link>
        </DIV_NAVBAR>
    );
}

export default Navbar;