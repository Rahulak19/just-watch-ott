import React,{useEffect,useState} from "react";
import "./Banner.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from "../../axios";
import requests from "../../Requests";
import { Originals } from "../../model/FetchMovieModel";
import { IMAGE_URL } from "../../util/utils";

const Banner:React.FC=()=>{
   
    function truncate(overview:string,num:number){
        return overview?.length>num? overview.substring(0,num-1)+'...':overview;
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
   // console.log(movie)
    return(
        <>
        <header className="banner__main" style={
            {
                backgroundImage:`url('${IMAGE_URL}/${movie?.backdrop_path}')`,
                backgroundSize:"cover",
                backgroundPosition:"top center",
                 backgroundRepeat:"no-repeat"
            }
        }>
            <div className="banner_contents_top">
                <div className="banner_contents">
                    <div className="mvi_name">
                        {movie?.title}
                    </div>
                    <div className="mvi_btns">
                        <button className="play_mvi">
                            <PlayArrowIcon sx={{paddingRight:"5px"}} fontSize="medium" />
                            Play</button>
                        <button className="info_mvi">
                            <InfoOutlinedIcon sx={{paddingRight:"5px"}} fontSize="medium" />
                            More Info</button>
                    </div>
                    <div className="mvi_banner_desc">
                       {truncate(movie?.overview,150)}
                    </div>
                </div>
            </div>
            {/* <div className="banner_img_end"></div> */}
           
        </header>
        </>
    )
}
export default Banner;