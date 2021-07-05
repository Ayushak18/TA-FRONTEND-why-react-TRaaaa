import Article from './Article';
import data from '../data.json';

function Articles() {
  return (
    <>
      <h1 className="articles">Articles</h1>
      <div className="flex">
        {data.map((article) => (
          <Article data={article} />
        ))}
      </div>
    </>
  );
}

export default Articles;
