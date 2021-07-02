// import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "./micro-components/Navbar";
 
const DetailView = () => {
    const idParam = useParams()
    const [detailData, setDetailData] = useState(0);
    const url = `https://kitsu.io/api/edge/anime/${idParam.id}`;

    useEffect(() => {
        const fetchingAnimeData = async () => {
            const res = await  fetch( url );
            const {data} = await res.json();
            console.log(data)
            setDetailData(data);
        }
        fetchingAnimeData();
    }, [url])
    
	console.log(detailData);

    return (
        <div>
            <Navbar />
            <div style={p}>{!detailData ? (<p>LOADING...</p>) : (
                    <div>
                        <p>{detailData.attributes.canonicalTitle}</p>
                        <pre style={pre}>{detailData.attributes.description}</pre>
                    </div>
            )}</div>   
        </div>
    )
}
const p = {
    color: "#fff",
    margin: "0 30px"
}
const pre = {
        whiteSpace: "pre-wrap",
        // whiteSpace: "-moz-pre-wrap",
        // whiteSpace: "-pre-wrap",
        // whiteSpace: "-o-pre-wrap",
        wordWrap: "break-word"
}
export default DetailView;