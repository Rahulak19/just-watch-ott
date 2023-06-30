import axios from "axios";

const AUTH_TOKEN:string=`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGFkMDk5OWQ2MjM2MmM5ZGY0Y2U0NTg4Y2ExYjRmYyIsInN1YiI6IjY0NmE0YjBkMmJjZjY3MDE1NTgzNmUwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NIvYdgPoRleGDdVgTWjtc-w-tvQVY5mIT-5uNnoGuW8`

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
instance.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = AUTH_TOKEN;
      }
     
      return config;
    },
    (err) => Promise.reject(err)
  );
export default instance;