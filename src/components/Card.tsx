import animeBanner from "../images/anime_banner.jpg";

interface CardProps {
  title: string;
  img: string;
  link: string;
  rating: number;
}

const Cards: React.FC<CardProps> = ({title, img, link, rating}) => {
  return (
    <div>
      <img className="animeBanner" src={animeBanner} alt="anime banner" />
      <h2 className="titles">{title}</h2>
      <img className="images" src={img} alt={title} />
      <p className="ratings">Rating: {rating}</p>
      <a className="links" href={link} target="_blank">Visit</a>
    </div>
  )
}

export default Cards;