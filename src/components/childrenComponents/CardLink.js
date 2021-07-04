import {Link} from "react-router-dom";

const CardLink = ({children, animeShowLink, currentAnimeShows=0, animeShow}) => {
    return ( 
        <Link style={animeShowLink} to={`/anime/${currentAnimeShows}/details/${ animeShow.hasId }`}>
            {children}
        </Link>
     );
}
 
export default CardLink;