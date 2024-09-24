
interface CardProps {
  title: string;
  img: string;
  link: string;
  rating: number;
}

const Cards: React.FC<CardProps> = ({ title, img, link, rating }) => {
  return (
    <div className="card">
      <img className="card-img" src={img} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-subtitle">Rating: {rating}</p>
        <a className="card-button" href={link} target="_blank">View More</a>
      </div>
    </div>
  );
};

export default Cards;

