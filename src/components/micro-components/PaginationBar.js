import { Link } from "react-router-dom"    
// import styled from "styled-components";

const button = {
    backgroundColor: "green",
    padding: "5px 25px",
    marginLeft: "5px",
    marginRigth: "5px"

}

export const Previous = ({id}) => {
    return ( 
        <Link style={button} to={`/${parseInt(id)-12}`}>previouso</Link>
     );
};

export const Next = ({id}) => {
    return (
        <Link style={button} to={`/${parseInt(id)+12}`}>nexto</Link>
    );
};

 
//te amo default props, love u :)
Next.defaultProps = {
    id: 0
}
