import { Link } from "react-router-dom";


const CardLink = ({children, currentAnimeShows=0, animeShowId}) => {
    const animeShowLink = {textDecoration: "none"};

    return ( 
        <Link style={animeShowLink} to={`/AnimeInfo/${currentAnimeShows}/details/${ animeShowId }`}>
            {children}
        </Link>
     );
}
 
export default CardLink;