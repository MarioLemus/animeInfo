import { Link } from "react-router-dom"    
// import styled from "styled-components";

const button = {
    backgroundColor: "red",
    color: "#fff",
    padding: "5px 25px",
    marginLeft: "5px",
    marginRight: "5px",
    textDecoration: "none",
    borderRadius: "3px"
}

export const PrevButton = ({CurrentRouteId=0}) => {
    return ( 
        <Link style={button} to={`/anime/${parseInt(CurrentRouteId)-12}`}>Previous</Link>
     );
};

export const NextButton = ({CurrentRouteId=0}) => {
    return (
        <Link style={button} to={`/anime/${parseInt(CurrentRouteId)+12}`}>Next</Link>
    );
};
