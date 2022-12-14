import Gallery from 'components/Gallery';
import Loader from 'components/Loader';
import { useFetchItems } from 'hooks';

 const Home = () => {
  const { movies, isLoading } = useFetchItems();
  return (
    <section>
      <h1>MOVIES</h1>
      {isLoading && movies.length === 0 ? (
        <Loader />
      ) : (
        <Gallery movies={movies} />
      )}
    </section>
  );
 };

export default Home;
