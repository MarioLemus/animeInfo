// import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "./micro-components/Navbar";
import SearchBar from "./micro-components/SearchBar";
import styled from "styled-components";
import { BackButton } from "./micro-components/TotalButton";

const DIV_CONTAINER = styled.div`
    color: #fff;
    margin: 0 30px;
`;
const PRE_SYNOPSIS = styled.pre`
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    font-family: 'Manrope', sans-serif;
    line-height: 1.5;
`;
const P_TITLE = styled.p`
    font-size: 27px;
    font-family: 'Manrope', sans-serif;
    color: red;
`;


const DetailView = () => {
    const {currentAnimeShows} = useParams()
    const {animeShowId} = useParams()
    const [detailData, setDetailData] = useState(0);
    const url = `https://kitsu.io/api/edge/anime/${animeShowId}`;

    useEffect(() => {
        const fetchingAnimeData = async () => {
            const res = await  fetch( url );
            const { data } = await res.json();
            console.log( data )
            setDetailData( data );
        }
        fetchingAnimeData();
    }, [url])
    
	console.log(detailData);
    console.log(`actual id de 2: ${animeShowId}`)
    console.log(`actual id de 1: ${currentAnimeShows}`)

    return (
        <div>
            <Navbar />
            <SearchBar />
            <BackButton currentAnimeShows={currentAnimeShows}/>

            <DIV_CONTAINER>
                {!detailData ? (<p>LOADING...</p>) : (
                    <div>
                        <P_TITLE>{detailData.attributes.canonicalTitle}</P_TITLE>
                        <PRE_SYNOPSIS>{detailData.attributes.description}</PRE_SYNOPSIS>
                    </div>
                )}
            </DIV_CONTAINER>   
        </div>
    )
}

export default DetailView;