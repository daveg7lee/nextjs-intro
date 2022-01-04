import Seo from '../components/SEO';

export default function NotFound() {
  return (
    <div>
      <Seo title="404 Not Found" />
      <h2>404 Page Not Found</h2>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80vh;
        }
      `}</style>
    </div>
  );
}
