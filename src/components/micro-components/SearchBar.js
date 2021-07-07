import styled from "styled-components";
import { useState, useEffect } from "react";
import { elemIndices } from "prelude-ls";
import { electron } from "webpack";

const DIV_SEARCH_CONTAINER = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;
    height: 5em;
`;
const INPUT_SEARCH = styled.input`
    width: 500px;
    height: 1.5em;
    font-family: 'Manrope', sans-serif;
`;
const BUTTON_SEARCH = styled.button`
    padding: 5.52px;
    background-color: red;
    border: none;
    font-family: 'Manrope', sans-serif;
`;

const SearchBar = () => {
    const [searchAnime, setSearchAnime] = useState('');
    const [posibleAnimes, setPosibleAnimes] = useState([]);
    const finalData = {
        hasTitle: "" || 'empty'
    }
    const [animeShow, setAnimeShow] = useState(finalData)

    const url = `https://kitsu.io/api/edge/anime?filter[text]=${searchAnime}`;

    useEffect(() => {
        const handleSearch = async (url) => {

            const res = await fetch(url);
            const {data} = await res.json();
            console.log(data)
            setPosibleAnimes(data)
        }
        handleSearch(url)
    }, [url])

    useEffect(() => {
        const handleSearchOptionList = (data) => {
            if (data) {

                data.map(el => {
                    setAnimeShow({
                        hasTitle: el.atributes.canonicalTitle
                    })

                })
            }
        }
        handleSearchOptionList()
    }, [posibleAnimes])

    console.log(posibleAnimes)
    console.log(searchAnime)
    return ( 
        <DIV_SEARCH_CONTAINER>
            <div>
                <INPUT_SEARCH type="text" placeholder="buscar anime" onChange={(e) =>setSearchAnime(e.target.value)}/>
                {posibleAnimes === 0 ? (<p>loading</p>):(posibleAnimes.map(option => <ul><li>{option.atributes.canonicalTitle}</li></ul>))}
                <BUTTON_SEARCH>buscar</BUTTON_SEARCH>
            </div>
        </DIV_SEARCH_CONTAINER>
     );
}
 
export default SearchBar;
