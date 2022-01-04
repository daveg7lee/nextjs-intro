import Seo from '../../components/SEO';

export default function Detail({ movie: { title, poster_path } }) {
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
    </div>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const movie = await (
    await fetch(`http://localhost:3000/api/movie/${id}`)
  ).json();
  return {
    props: { movie },
  };
}
