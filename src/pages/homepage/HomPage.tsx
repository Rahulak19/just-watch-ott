import React from "react"
import Navbar from "../../components/navbar/Navbar";
import "./HomePage.css"
import Banner from "../../components/banner/Banner";
import Row from "../../components/row/Row";
import requests from "../../Requests";
const HomePage:React.FC=()=>{
    return(
        <>
        <div className="home__main">        
        {/* NavBar */}
        <Navbar />

        {/* Banner */}
        <Banner />
        {/* MainPage */}
        <Row 
        title="Trending now"
        fetchURL={requests.fetchTrending}
         isLarge={true}
        
        />
         <Row 
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        // isLarge={true}
        
        />
         <Row 
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        // isLarge={true}
        
        />
         <Row 
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        // isLarge={true}
        
        />
         <Row 
        title="Romantic Movies"
        fetchURL={requests.fetchRomanceMovies}
        // isLarge={true}
        
        />
        <Row 
        title="Top Rated"
        fetchURL={requests.fetchTopRated}
        // isLarge={true}
        
        />

        {/* <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1> */}
        {/* Footer */}
        </div>
        </>
    )
}

export default HomePage;