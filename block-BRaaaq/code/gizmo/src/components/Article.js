import PropTypes from 'prop-types';

function Article(props) {
  return (
    <div className="article">
      <img src={props.data.urlToImage} alt={props.data.author} />
      <h2 className="title">{props.data.title}</h2>
    </div>
  );
}

Article.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Article;
