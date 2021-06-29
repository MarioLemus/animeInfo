import {Link} from "react-router-dom"    

export const Previous = ({handleChange, id}) => {
    return ( 
            <Link to={`/${parseInt(id)-12}`} onClick={handleChange}>previouso</Link>
     );
}

export const Next = ({handleChange, id}) => {
        
    return (
            <Link to={`/${parseInt(id)+12}`} onClick={handleChange}>nexto</Link>
    )
}

 

//te amo default props, love u :)
Next.defaultProps = {
    id: 0
}
