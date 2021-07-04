import styled from "styled-components";

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
    
    return ( 
        <DIV_SEARCH_CONTAINER>
            <div>
                <INPUT_SEARCH type="text" placeholder="buscar anime" onChange={(e) =>e.target.value}/>
                <BUTTON_SEARCH>buscar</BUTTON_SEARCH>
            </div>
        </DIV_SEARCH_CONTAINER>
     );
}
 
export default SearchBar;
