import MovieLayout from "components/General/MainLayout/MovieLayout";
import { Movie } from "components/Movie/Movie";
import type { NextPage } from "next";

const MovieItem: NextPage = () => {
  return (
    <MovieLayout>
      <Movie />
    </MovieLayout>
  );
};

export default MovieItem;
