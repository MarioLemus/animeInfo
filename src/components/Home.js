import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Next, Previous } from './micro-components/PaginationBar';
import Navbar from "./micro-components/Navbar";
import styled from "styled-components";


const Home = () => {

    const [animeData, setAnimeData] = useState([]);
    //el nombre del useParams debe coincidir con el nombre de la ruta dinamica
    const {id} = useParams();
    const url = `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${id}`;
    //los nombres de las variables se encuemtran en snake case y mayusculas para evitar confundirlos con los componentes
    const DIV_MAIN_CONTAINER = styled.div`
        width: 65em;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    
    `;
    const DIV_CARD = styled.div`
        margin: 0 auto;
        width: 13em;
   
    `;
    const P_TITLE = styled.p`
        color: #fff;
        text-align: center;
    `;
    const IMG_PORTRAIT = styled.img`
        display: block;
        margin: 0 auto;
    `;
    const DIV_PAGINATION_BAR = styled.div`
        background-color: red;
        height: 3em;
        display: flex;
        align-items: center;
        
    `;
    const DIV_SEARCH_OPTION = styled.div`
        display: flex;    
        justify-content: center;
        align-items: center;
        height: 5em;
    `;
    const INPUT_SEARCH_BAR = styled.input`
        width: 500px;
        height: 1.5em;
    `;
    const BUTTON_SEARCH_BAR = styled.button`
        padding: 5.52px;
        background-color: red;
        border: none;
    `;
    const link = {
        textDecoration: "none"
    }

    //obtencion de datos de la api, caratulas de las series, nombres
    useEffect(() => {
        const fetchingAnimeData = async () => {
            const res = await  fetch( url );
            // se destructura la data para que pueda ser púesta dentro del array del hook, si no solo aparece como un array vacio, y el objeto fuera de este.
            const { data } = await res.json();
            console.log( data )
            setAnimeData( data );
        }
        fetchingAnimeData();
    }, [url])

    return(
        <div>
            <Navbar />    
            <DIV_SEARCH_OPTION>
                <div>
                    <INPUT_SEARCH_BAR type="text" placeholder="buscar novela"/>
                    <BUTTON_SEARCH_BAR>buscar</BUTTON_SEARCH_BAR>
                </div>
            </DIV_SEARCH_OPTION>

            <DIV_MAIN_CONTAINER>
                {animeData.map(data => {

                    const anime = {
                        id: data.id,
                        title: data.attributes.canonicalTitle,
                        imgTiny: data.attributes.posterImage.tiny
                    }

                    return (
                        <DIV_CARD key={ anime.id }>
                            <Link style={link} to={`/anime/details/${ anime.id }`}>
                                <IMG_PORTRAIT src={ anime.imgTiny } alt="" />
                                <P_TITLE>{ anime.title }</P_TITLE>   
                            </Link>
                        </DIV_CARD>
                    )
                })}
            </DIV_MAIN_CONTAINER>

            <DIV_PAGINATION_BAR>
                    <div>
                        <Previous id={ id }/>
                        <Next id={ id }/>    
                    </div>
            </DIV_PAGINATION_BAR>        
        </div>
    )
}

export default Home;
