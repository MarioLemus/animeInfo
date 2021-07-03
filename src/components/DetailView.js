// import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "./micro-components/Navbar";
import SearchBar from "./micro-components/SearchBar";
import styled from "styled-components";

const DetailView = () => {
    const {currentRouteId} = useParams()
    const [detailData, setDetailData] = useState(0);
    const url = `https://kitsu.io/api/edge/anime/${currentRouteId}`;
    const DIV_CONTAINER = styled.div`
        color: #fff;
        margin: 0 30px;

    `;
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

    return (
        <div>
            <Navbar />
            <SearchBar />

            <DIV_CONTAINER>
                {!detailData ? (<p>LOADING...</p>) : (
                    <div>
                        <p>{detailData.attributes.canonicalTitle}</p>
                        <pre style={pre}>{detailData.attributes.description}</pre>
                    </div>
                )}
            </DIV_CONTAINER>   
        </div>
    )
}
const pre = {
        whiteSpace: "pre-wrap",
        // whiteSpace: "-moz-pre-wrap",
        // whiteSpace: "-pre-wrap",
        // whiteSpace: "-o-pre-wrap",
        wordWrap: "break-word"
}
export default DetailView;