import React from "react";
import "./Banner.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Banner:React.FC=()=>{
    return(
        <>
        <header className="banner__main" style={
            {
                background:`url('https://wallpaperaccess.com/full/1842590.jpg')`,
                backgroundSize:"cover",
                backgroundPosition:"center center",
                 backgroundRepeat:"no-repeat"
            }
        }>
            <div className="banner_contents_top">
                <div className="banner_contents">
                    <div className="mvi_name">
                        John Wick
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