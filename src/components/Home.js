import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { PrevButton, NextButton } from './micro-components/TotalButton';
import Navbar from "./micro-components/Navbar";
import SearchBar from './micro-components/SearchBar';
import styled from "styled-components";
import CardLink from './childrenComponents/CardLink';

const DIV_CARD_CONTAINER = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    min-height: 60em;
    font-family: 'Manrope', sans-serif;
    @media (max-width: 618px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 380px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const DIV_CARD = styled.div`
    margin: 0 auto;
    width: 10rem;
`;
const P_TITLE = styled.p`
    color: #fff;
    text-align: center;
    font-size: 15px;
`;
const IMG_PORTRAIT = styled.img`
    display: block;
    margin: 0 auto;
`;
const DIV_PAGINATION_BAR = styled.div`
    height: 2em;
    display: flex;
    align-items: center;   
    justify-content: center; 
    margin-bottom: 10px;
`;
const DIV_BUTTON_CONTAINER = styled.div`
    width: 230px;
    text-align: center;
`;
const DIV_IMG_CONTAINER = styled.div`
    margin: 0 auto;
    height: 156px;
    width: 110px;
`;

const Home = () => {

    const [animeData, setAnimeData] = useState([]);
    const { currentAnimeShows } = useParams();
    const url = `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${currentAnimeShows}`;
    const ANIMESHOWLIMIT = 11;
    const startAnimeShow = parseInt(currentAnimeShows) || 0;

    useEffect(() => {
        const fetchingAnimeData = async () => {
            const res = await  fetch( url );
            const { data } = await res.json();
            console.log( data );
            setAnimeData( data );
        }
        fetchingAnimeData();
    }, [url])

    console.log(`inicio del parametro: ${startAnimeShow}`)
    return(
        <div>
            <Navbar />    
            <SearchBar />

            <DIV_CARD_CONTAINER>
                {animeData.map(data => {
                    
                    const animeShow = {
                        hasId: data.id,
                        hasTitle: data.attributes.canonicalTitle,
                        hasImgTiny: data.attributes.posterImage.tiny
                    }

                    return (
                        <DIV_CARD key={ animeShow.hasId }>
                            <CardLink currentAnimeShows={currentAnimeShows} animeShowId={animeShow.hasId}>
                                <DIV_IMG_CONTAINER>
                                    <IMG_PORTRAIT src={ animeShow.hasImgTiny } alt="" />
                                </DIV_IMG_CONTAINER>
                                <P_TITLE>{ animeShow.hasTitle }</P_TITLE>   
                            </CardLink>
                        </DIV_CARD>
                    )
                })}
            </DIV_CARD_CONTAINER>

            <DIV_PAGINATION_BAR>
                <DIV_BUTTON_CONTAINER>
                    {startAnimeShow > ANIMESHOWLIMIT && <PrevButton currentAnimeShows={ currentAnimeShows }/>}
                    <NextButton currentAnimeShows={ currentAnimeShows }/>
                </DIV_BUTTON_CONTAINER>
            </DIV_PAGINATION_BAR>        
        </div>
    )
}

export default Home;
