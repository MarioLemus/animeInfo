import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardLink from "../childrenComponents/CardLink";

const DIV_SEARCH_CONTAINER = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;
    height: 5em;
    margin-bottom: 0.8rem;
`;
const INPUT_SEARCH = styled.input`
    width: 350px;
    height: 1.5em;
    font-family: 'Manrope', sans-serif;
    @media (max-width: 552px) {
        width: 300px;
    }
    @media (max-width: 300px) {
        width: 200px;
    }
`;
const DIV_SEARCH_LIST = styled.div`
    background-color: #fff;
    margin: 0 auto;
    justify-content: center;
    width: 358px;
    @media (max-width: 552px) {
        width: 300px;
    }
    @media (max-width: 300px) {
        width: 200px;
    }
`;
const DIV_LIST = styled.div`
    color: #000;
    list-style: none;
    height: 3.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: flex;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    border-bottom: 1px solid #0e1821;

    &:hover {
        background-color: red;
    }
`;
const DIV_SEARCH_LIST_CONTAINER = styled.div`
    width: 100%;
    position: absolute;
    margin-top: -2rem;
`;

const SearchBar = () => {
    const [searchAnime, setSearchAnime] = useState('');
    const [posibleAnimes, setPosibleAnimes] = useState([]);
    const url = `https://kitsu.io/api/edge/anime?filter[text]=${searchAnime}`;
    const {currentAnimeShows} = useParams();

    useEffect(() => {
        const handleSearch = async (url) => {
            try {
                const res = await fetch(url);
                const {data} = await res.json();
                console.log(data)
                setPosibleAnimes(data)
            } 
            catch (e) {
                console.log('No info was fetch check your internet connection');
            }
        }
        handleSearch(url)
    }, [url])


    return ( 
        <div>
            <DIV_SEARCH_CONTAINER>
            <div>
                <INPUT_SEARCH type="text" placeholder="buscar anime" onChange={(e) =>setSearchAnime(e.target.value)}/>
                {/* <BUTTON_SEARCH>buscar</BUTTON_SEARCH> */}
            </div>
            </DIV_SEARCH_CONTAINER>

            <DIV_SEARCH_LIST_CONTAINER>
            {posibleAnimes.length === 0 ?  '' : 
                (
                <DIV_SEARCH_LIST>
                    {posibleAnimes.map(anime => {

                        const animeShow = {
                            hasTitle : anime.attributes.canonicalTitle,
                            hasId : anime.id
                        }

                        return(
                            <CardLink currentAnimeShows={currentAnimeShows} animeShowId={animeShow.hasId}>
                                <DIV_LIST key={animeShow.hasId}> {animeShow.hasTitle} </DIV_LIST>
                            </CardLink>
                            )
                    })}
                </DIV_SEARCH_LIST>
                )
            }
            </DIV_SEARCH_LIST_CONTAINER>
        </div>
     );
}
 
export default SearchBar;
