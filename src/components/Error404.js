import React, { Fragment } from 'react'
import styled from 'styled-components';
import Navbar from './micro-components/Navbar';

const DIV_ERROR_CONTAINER = styled.div`
    display: flex;
    justify-content: center; 
    height: calc(100vh - 3em);
    background-color: red;
    align-items: center;
`;
const H1_ERROR_TITLE = styled.h1`
    color: #fff;
`;
export const Error404 = () => {
    return (
        <Fragment>
            <Navbar />
            <DIV_ERROR_CONTAINER>
            <div>
                <H1_ERROR_TITLE>
                    Error 404
                </H1_ERROR_TITLE>
            </div>
        </DIV_ERROR_CONTAINER>
        </Fragment>
    )
}
