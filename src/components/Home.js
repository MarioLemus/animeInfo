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
        background-Color: blue;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    `;
    const DIV_CARD = styled.div`
        margin: 0 auto;
        width: 20em;
        background-color: violet;
    `;
const p = {
    textAlign: "center"
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
            <div>
                <input type="text" placeholder="buscar novela"/>
                <button>buscar</button>
            </div>

            <DIV_MAIN_CONTAINER>
                {animeData.map(data => {
                    return (
                        <DIV_CARD key={ data.id }>
                            <p>{ data.attributes.canonicalTitle }</p>
                            <img src={ data.attributes.posterImage.tiny } alt="" />
                            <Link to={`/anime/details/${ data.id }`}>see more</Link>
                        </DIV_CARD>
                    )
                })}
            </DIV_MAIN_CONTAINER>

            <div>
                <Previous id={ id }/>
                <Next id={ id }/>    
            </div>        
        </div>
    )
}

export default Home;
