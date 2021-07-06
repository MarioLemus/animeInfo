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
    const [detailData, setDetailData] = useState();
    const url = `https://kitsu.io/api/edge/anime/${animeShowId}`;
    
    const finalData = {
        hasTitle: "" || 'No Title Loaded...',
        hasSynopsis: "" || 'No Synopsis Loaded...',
        hasFinished: "" || 'No data',
        hasEpisodeCount: "" || 'No data',
        hasStatus: "" || 'No data'
    };
    const [animeShow, setAnimeShow] = useState(finalData);

    useEffect(() => {
        const fetchingAnimeData = async (animeUrl) => {
            try {
                const res = await  fetch(animeUrl);
                const {data} = await res.json();
                console.log(data);
                setDetailData(data);
            } 

            catch (error) {
                console.log('No info was fetch check your internet connection');
            }
        }
        fetchingAnimeData(url);
    }, [url])
    
	// console.log(detailData);
    // console.log(`actual id de 2: ${animeShowId}`)
    // console.log(`actual id de 1: ${currentAnimeShows}`)
    
    useEffect(() => {
        const HandleViewData = () => {
            if (detailData) {
                try {
                    setAnimeShow({
                        hasTitle: detailData.attributes.canonicalTitle,
                        hasSynopsis: detailData.attributes.description,
                        hasFinished: detailData.attributes.endDate,
                        hasEpisodeCount: detailData.attributes.episodeCount,
                        hasStatus: detailData.attributes.status
                    })

                } catch (e) {
                    console.log('Currently undefined data loading will take some seconds');
                }  
            }
        }    
        HandleViewData()
    }, [detailData])
    
    
    return (
        <div>
            <Navbar />
            <SearchBar />
            <BackButton currentAnimeShows={currentAnimeShows}/>

            <DIV_CONTAINER>
                {!detailData ? (<p>LOADING...</p>) : (
                    <div>
                        {animeShow.hasTitle === null ? '' : <P_TITLE>{animeShow.hasTitle}</P_TITLE>}
                        {animeShow.hasSynopsis === null ? '' : <PRE_SYNOPSIS>{animeShow.hasSynopsis}</PRE_SYNOPSIS>}
                        {animeShow.hasFinished === null ? '' : <div><p>Endede at: {animeShow.hasFinished}</p></div>}
                        {animeShow.hasEpisodeCount === null ? '' : <div><p>Episode count: {animeShow.hasEpisodeCount}</p></div>}
                        {animeShow.hasStatus === null ? '' : <div><p>Status: {animeShow.hasStatus}</p></div>}
                    </div>
                )}
            </DIV_CONTAINER>   
        </div>
    )
}

export default DetailView;