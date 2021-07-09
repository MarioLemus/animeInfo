// import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "./micro-components/Navbar";
import SearchBar from "./micro-components/SearchBar";
import styled from "styled-components";
import { BackButton } from "./micro-components/TotalButton";

const DIV_MAIN_CONTAINER = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
`;
const DIV_PRESENTATION_CARD = styled.div`
    width: 25%;
    margin: 0 auto;
`;
const DIV_SYNOPSIS_CONTAINER = styled.div`
    color: #fff;
    margin: 0 30px;
    width: 75%;
    min-height: 23rem;    
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
const P_TITLE_SYNOPSIS = styled.p`
    font-size: 23px;
    font-family: 'Manrope', sans-serif;
    color: red;
    font-weight: 500;
`;
const P_INFO = styled.p`
    padding-left: 4rem;
    padding-right: 4rem;
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    color: #fff;
`;
const P_PRESENTATION_TITLE = styled.p`
    font-size: 20px;
    font-family: 'Manrope', sans-serif;
    color: red;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 1.3rem;
    font-weight: 500;
    text-align: center;
`;





const DetailView = () => {
    const {currentAnimeShows} = useParams()
    const {animeShowId} = useParams()
    const [detailData, setDetailData] = useState();
    const url = `https://kitsu.io/api/edge/anime/${animeShowId}`;
    
    const finalData = {
        hasTitle: "" || 'No Title Loaded...',
        hasSynopsis: "" || 'No Synopsis Loaded...',
        hasStartDate: "" || 'No data---',
        hasFinished: "" || 'No data',
        hasEpisodeCount: "" || 'No data',
        hasStatus: "" || 'No data',
        hasEpisodeLength: "" || 'No data---',
        hasNsfwContent: "" || 'No data---',
        hasPopularityRank: "" || 'No data---',

    };
    const [animeShow, setAnimeShow] = useState(finalData);

    useEffect(() => {
        const fetchingAnimeData = async (animeUrl) => {
            try {
                const res = await  fetch(animeUrl);
                const {data} = await res.json();
                setDetailData(data);
            } 

            catch (error) {
                console.log('No info was fetch check your internet connection');
            }
        }
        fetchingAnimeData(url);
    }, [url])

    
    useEffect(() => {
        const HandleViewData = (data) => {
            if (data) {
                try {
                    setAnimeShow({
                        hasTitle: detailData.attributes.canonicalTitle,
                        hasImg: detailData.attributes.posterImage.tiny,
                        hasSynopsis: detailData.attributes.description,
                        hasStartDate: detailData.attributes.startDate,
                        hasFinished: detailData.attributes.endDate,
                        hasEpisodeCount: detailData.attributes.episodeCount,
                        hasStatus: detailData.attributes.status,
                        hasEpisodeLength: detailData.attributes.episodeLength,
                        hasNsfwContent: detailData.attributes.nsfw,
                        hasPopularityRank: detailData.attributes.popularityRank
                    })

                } catch (e) {
                    console.log('Currently undefined data loading will take some seconds');
                }  
            }
        }    
        HandleViewData(detailData)
    }, [detailData])
    
    
    console.log(detailData)
    return (
        <div>
            <Navbar />
            <SearchBar />

            <DIV_MAIN_CONTAINER>
                <DIV_PRESENTATION_CARD>
                    {animeShow.hasImg === null ? '' : <div><img style={{display: 'block', margin: '0 auto', marginTop: '-2rem'}} src={animeShow.hasImg} alt="" /></div>}
                    {animeShow.hasTitle === null ? '' : <P_PRESENTATION_TITLE>{animeShow.hasTitle}</P_PRESENTATION_TITLE>}
                    {animeShow.hasStatus === null ? '' : <P_INFO>Status: {animeShow.hasStatus}</P_INFO>}
                    {animeShow.hasEpisodeCount === null ? '' : <P_INFO>Episode count: {animeShow.hasEpisodeCount}</P_INFO>}
                    {animeShow.hasPopularityRank === null ? '' : <P_INFO>Popularity rank {animeShow.hasPopularityRank}</P_INFO>}
                    {animeShow.hasEpisodeLength === null ? '' : <P_INFO>Episode length: {animeShow.hasEpisodeLength} min</P_INFO>}
                    {animeShow.hasStartDate === null ? '' : <P_INFO>Start date: {animeShow.hasStartDate}</P_INFO>}
                    {animeShow.hasFinished === null ? '' : <P_INFO>Ended at: {animeShow.hasFinished}</P_INFO>}
                    {/* {animeShow.hasNsfwContent === false || null ? <p>No nsfw content</p> : <p>Contains NSFW content</p>} */}
                </DIV_PRESENTATION_CARD>

                <DIV_SYNOPSIS_CONTAINER>
                    {!detailData ? (<p>LOADING...</p>) : (
                        <div>
                            <P_TITLE_SYNOPSIS>Synopsis:</P_TITLE_SYNOPSIS>
                            {animeShow.hasSynopsis === null ? '' : <PRE_SYNOPSIS>{animeShow.hasSynopsis}</PRE_SYNOPSIS>}
                        </div>
                    )}
                </DIV_SYNOPSIS_CONTAINER>   
            </DIV_MAIN_CONTAINER>
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: '0 auto', width: '80%'}}>
                <BackButton currentAnimeShows={currentAnimeShows}/>
            </div>
        </div>
    )
}

export default DetailView;