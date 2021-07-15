import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardLink from "../childrenComponents/CardLink";

const DIV_SEARCH_CONTAINER = styled.div`
    display: flex;
    // background-color: purple;    
    justify-content: center;
    align-items: center;
    height: 5em;
    margin-bottom: 0.8rem;
`;
const INPUT_SEARCH = styled.input`
    width: 350px;
    height: 1.5em;
    margin-top: 2rem;
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
    //background-color: violet;
    min-height: 100vh;
    position: absolute;
    margin-top: -1rem;
`;

const SearchBar = () => {
    const [searchAnime, setSearchAnime] = useState('');
    //data cruda
    const [posibleAnimes, setPosibleAnimes] = useState([]);
    const url = `https://kitsu.io/api/edge/anime?filter[text]=${searchAnime}`;
    //objeto con data de las series
    const {currentAnimeShows} = useParams();
    //estatus de la lista de resultados
    const [searchListState, setSearchListState] = useState(false);

    useEffect(() => {
        const handleSearch = async (url) => {
            try {
                const res = await fetch(url);
                const {data} = await res.json();
                setPosibleAnimes(data)
            } 
            catch (e) {
                console.log('No info was fetch check your internet connection');
            }
        }
        handleSearch(url)
    }, [url])

    //verifica que el esttado de la lista de resultados sea correcto
    const handleCloseSearchFilteredList = () => {
        setSearchListState(false);
    }

    //barra de busqueda
    const handleInputChange = (e) => {
        setSearchAnime(e.target.value);
        setSearchListState(true);
    }

    useEffect(()=>{
        console.table(posibleAnimes)
    }, [posibleAnimes])

        return ( 
        <div onClick={handleCloseSearchFilteredList}>
            <DIV_SEARCH_CONTAINER >
                <INPUT_SEARCH type="text" placeholder="Search anime" onChange={(e) => handleInputChange(e)}/>
            </DIV_SEARCH_CONTAINER>
            
            {/* verifica si el estatus es true y si lo es renderiza los elementos */}
            {searchListState && (
                <DIV_SEARCH_LIST_CONTAINER>

                    {posibleAnimes.length === 0 ?  '' : 

                        <DIV_SEARCH_LIST>
                            {posibleAnimes.map(anime => {
                          
                                const animeShow = {
                                    hasId : anime.id,
                                    hasTitle : anime.attributes.canonicalTitle
                                }
                          
                                return(
                                    <div key={animeShow.hasId}>
                                        <CardLink currentAnimeShows={currentAnimeShows}
                                                  animeShowId={animeShow.hasId}>
                                                      
                                            <DIV_LIST>{animeShow.hasTitle}</DIV_LIST>
                                        </CardLink>
                                    </div>    
                                )
                            })}
                        </DIV_SEARCH_LIST>

                    }

                </DIV_SEARCH_LIST_CONTAINER>
            )}
           
        </div>
     );
}
 
export default SearchBar;
