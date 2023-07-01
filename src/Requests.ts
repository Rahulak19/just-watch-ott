

const requests={
    fetchTrending:`/trending/all/day?language=en-US`,
    fetchOriginals:`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    fetchTopRated:`/movie/top_rated?language=en-US&page=1';`,
    fetchActionMovies:`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=28`,
    fetchRomanceMovies:`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=10749`,
    fetchComedyMovies:`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=27`
}

export default requests;