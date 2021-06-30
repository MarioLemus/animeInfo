import {Link} from "react-router-dom"    

export const Previous = ({id}) => {
    return ( 
        <Link to={`/${parseInt(id)-12}`}>previouso</Link>
     );
};

export const Next = ({id}) => {
    return (
        <Link to={`/${parseInt(id)+12}`}>nexto</Link>
    );
};

 
//te amo default props, love u :)
Next.defaultProps = {
    id: 0
}
