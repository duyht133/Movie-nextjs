import Head from "next/head";
import Hero from "../components/Hero";
import axios from "axios";
import PopularMovie from "../components/PopularMovie";

export default function Home({ movies }) {
  return (
    <div>
      <Hero className="bg-gray-700"/>
      <PopularMovie movies={movies.results}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios(
    "https://api.themoviedb.org/3/movie/popular?api_key=3d9139809c5ca1d299ba6f7d65bff946"
  );
  const movies = await res.data
  return {
    props: {
      movies,
    },
  };
};
