import { Link } from "react-router-dom"    
// import styled from "styled-components";

const button = {
    backgroundColor: "red",
    color: "#fff",
    padding: "5px 25px",
    marginLeft: "5px",
    marginRight: "5px",
    marginBottom: "1.5rem",
    textDecoration: "none",
    borderRadius: "3px",
    fontFamily: "'Manrope', 'sans-serif'"
}

export const PrevButton = ({currentAnimeShows=0}) => {
    return ( 
        <Link style={button} to={`/AnimeInfo/${parseInt(currentAnimeShows)-12}`}>Previous</Link>
     );
};

export const NextButton = ({currentAnimeShows=0}) => {
    return (
        <Link style={button} to={`/AnimeInfo/${parseInt(currentAnimeShows)+12}`}>Next</Link>
    );
};

export const BackButton = ({currentAnimeShows=0}) => {
    return ( 
        <Link style={button} to={`/AnimeInfo/${currentAnimeShows}`}>go back</Link>
     );
};