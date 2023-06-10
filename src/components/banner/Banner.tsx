import React from "react";
import "./Banner.css"
const Banner:React.FC=()=>{
    return(
        <>
        <header className="banner__main" style={
            {
                background:`url('https://wallpaperaccess.com/full/1842590.jpg')`,
                backgroundSize:"cover",
                 backgroundPosition:"top top",
                 backgroundRepeat:"no-repeat"
            }
        }>
            <div className="banner_contents_top">
            <div className="banner_contents">
                <div className="mvi_name">
                    John Wick
                </div>
                <div className="mvi_btns">
                    <button className="play_mvi">Play</button>
                    <button className="info_mvi">More Info</button>
                </div>
            </div></div>
           
        </header>
        </>
    )
}
export default Banner;