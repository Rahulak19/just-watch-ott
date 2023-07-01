import React, { useEffect, useState } from "react";
import "./Row.css";
import { Originals } from "../../model/FetchMovieModel";
import axios from "../../axios";
import { IMAGE_URL } from "../../util/utils";

interface Props{
    title:string,
    fetchURL:string,
    isLarge?:boolean
}
const Row:React.FC<Props>=(props:Props)=>{
    const rowProps:Props={
        title:props.title,
        fetchURL:props.fetchURL,
        isLarge:props.isLarge?props.isLarge:false 
    }as Props;
    const [movies,setMovies]=useState<Originals[]>([]);
    useEffect(()=>{
        async function fetchData() {
            const request=await axios.get(props.fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData();

    },[props.fetchURL])
    console.log(movies)
    console.log(rowProps.isLarge)
    return(
        <>
        <div className="row">
            <div className="row__title">{props.title}</div>
            <div className="row__posters">
            {
                movies.map(movie =>(
                    ((rowProps.isLarge && movie.poster_path) ||
                    (!rowProps.isLarge && movie.backdrop_path)) &&(
                        <img 
                    className={`row__poster ${rowProps.isLarge && "row__posterLarge"}`}
                    src={`${IMAGE_URL}${rowProps.isLarge?movie.poster_path:movie.backdrop_path}`}
                    alt={movie.title} />
                    )
                    
                ))
            }
            </div>
           
        </div>
        </>
    )
}
export default Row;