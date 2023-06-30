import React,{useEffect,useState} from "react";
import "./Banner.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from "../../axios";
import requests from "../../Requests";

const Banner:React.FC=()=>{
    type Originals={
        adult: string,
        backdrop_path: string,
        genre_ids: number[],
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity:number,
        poster_path: string,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    }
    const [movie,setMovie]:any=useState<Originals[]>([])
    useEffect(()=>{
        async function fetchData() {
            const request=await axios.get(requests.fetchOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            )
            return request;
        }
        fetchData();
    },[])
    console.log(movie)
    return(
        <>
        <header className="banner__main" style={
            {
                backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundSize:"cover",
                backgroundPosition:"top center",
                 backgroundRepeat:"no-repeat"
            }
        }>
            <div className="banner_contents_top">
                <div className="banner_contents">
                    <div className="mvi_name">
                        {movie.title}
                    </div>
                    <div className="mvi_btns">
                        <button className="play_mvi">
                            <PlayArrowIcon sx={{marginTop:""}} fontSize="large" />
                            Play</button>
                        <button className="info_mvi">
                            <InfoOutlinedIcon fontSize="large" />
                            More Info</button>
                    </div>
                </div>
            </div>
            <div className="banner_img_end"></div>
           
        </header>
        </>
    )
}
export default Banner;