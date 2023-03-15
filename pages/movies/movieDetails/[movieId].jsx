import { useRouter } from "next/router";

const MovieDetail = () => {
  const router = useRouter();
  const movieId = router.query.movieId;
  return (
    <div>
      <h1>Movie ID {movieId}</h1>
    </div>
  );
};

export default MovieDetail;
