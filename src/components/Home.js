import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { PrevButton, NextButton } from './micro-components/PaginationBar';
import Navbar from "./micro-components/Navbar";
import SearchBar from './micro-components/SearchBar';
import styled from "styled-components";


const Home = () => {

    const [animeData, setAnimeData] = useState([]);
    // const [searchAnimeShow, setSearchAnimeShow] = useState('');
    const {CurrentRouteId} = useParams();
    const url = `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${CurrentRouteId}`;
    const DIV_CARD_CONTAINER = styled.div`
        width: 65em;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        min-height: 60em;
        font-family: 'Manrope', sans-serif;
    `;
    const DIV_CARD = styled.div`
        margin: 0 auto;
        width: 13em;
   
    `;
    const P_TITLE = styled.p`
        color: #d9ebe9;
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
    `;
    const DIV_BUTTON_CONTAINER = styled.div`
        width: 230px;
        text-align: center;
    `;
    const animeShowLink = {
        textDecoration: "none"
    }

    useEffect(() => {
        const fetchingAnimeData = async () => {
            const res = await  fetch( url );
            const { data } = await res.json();
            console.log( data );
            setAnimeData( data );
        }
        fetchingAnimeData();
    }, [url])

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
                            <Link style={animeShowLink} to={`/anime/details/${ animeShow.hasId }`}>
                                <IMG_PORTRAIT src={ animeShow.hasImgTiny } alt="" />
                                <P_TITLE>{ animeShow.hasTitle }</P_TITLE>   
                            </Link>
                        </DIV_CARD>
                    )
                })}
            </DIV_CARD_CONTAINER>

            <DIV_PAGINATION_BAR>
                <DIV_BUTTON_CONTAINER>

                    <PrevButton CurrentRouteId={ CurrentRouteId }/>
                    <NextButton CurrentRouteId={ CurrentRouteId }/>
                        
                </DIV_BUTTON_CONTAINER>
            </DIV_PAGINATION_BAR>        
        </div>
    )
}

export default Home;
