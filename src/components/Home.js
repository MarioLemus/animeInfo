import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import {Next, Previous} from './micro-components/NavigationBar';



const Home = (props) => {

    const [animeData, setAnimeData] = useState([]);
    const [paginationTotal, setPaginationTotal] = useState(12);
    // const [routing, setRouting] = useState();
    //el nombre del useParams debe coincidir con el nombre de la ruta dinamica
    const {id} = useParams();
    const url = `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${id}`;

    useEffect(() => {
        const fetchingAnimeData = async () => {
            const res = await  fetch( url );
            // se destructura la data para que pueda ser púesta dentro del array del hook, si no solo aparece com un array vacio, y el objeto fuera de este
            const {data} = await res.json();
            console.log(data)
            setAnimeData(data);
        }
        fetchingAnimeData();
    }, [url])

    const Navbar = () => {
        return(
            <div className="Navbar_container" style={ navbarStyle }>
                <Link to="/" onClick={()=>setPaginationTotal(0)}>AnimeInfo</Link>
            </div>
        )
    }

    const handleChange = () => {
        const nextPag = paginationTotal+12;
        console.log(`proxima pagina: ${nextPag}`)
        console.log(`actual id: ${id}`)

        return ( 
            setPaginationTotal(nextPag)
         );
    }

    console.log(id)
    return(
        <div>
            <Navbar />
                    
            <div>
                <input type="text" placeholder="buscar novela"/>
                <button>buscar</button>
            </div>
            <div style={contentContainer}>
                
                {animeData.map(data => {
                    return (
                        <div key={data.id} style={cardContainer}>
                            <p>{ data.attributes.canonicalTitle }</p>
                            <img src={ data.attributes.posterImage.tiny } alt="" />
                            <Link to={`/anime/details/${ data.id }`}>see more</Link>
                        </div>
                    )
                })}

            </div>
            <div>
                <Previous paginationTotal={paginationTotal} handleChange={handleChange} id={id}/>
                <Next paginationTotal={paginationTotal} handleChange={handleChange} id={id}/>    
            </div>        
        </div>
    )
}

const navbarStyle = {
        display: "flex"     
}
const contentContainer = {
        width: "65em",
        backgroundColor: "blue",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)"
}
const cardContainer = {
        margin: "0 auto",
        width: "20em",
        backgroundColor: "violet"
}
export default Home;
