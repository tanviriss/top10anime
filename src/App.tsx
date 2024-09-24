import Cards from './components/Card'
import './App.css'
import naruto from "./images/naruto.jpg";
import onePiece from "./images/onePiece.avif";
import deathnote from "./images/deatNote.jpg";
import attackOnTitan from "./images/AOT.webp";
import fullMetal from "./images/Fullmetal-Alchemist-Brotherhood-800x505.webp";
import myHero from "./images/mha.jpg";
import demonSlayer from "./images/demonslayer.jpg";
import swordArt from "./images/sao.jpg";
import tokyoGhoul from "./images/tokyo-ghoul-2014.jpg";
import onePunch from "./images/onepunchman.jpg";

type Anime = {
  title: string;
  img: string;
  rating: number;
  link: string;
};

function App() {

  const Animes: Anime[] = [
    {
      title: "Naruto",
      img: naruto,
      rating: 8.2,
      link: "https://myanimelist.net/anime/20/Naruto"
    },
    {
      title: "One Piece",
      img: onePiece,
      rating: 8.7,
      link: "https://myanimelist.net/anime/21/One_Piece"
    },
    {
      title: "Attack on Titan",
      img: attackOnTitan,
      rating: 8.9,
      link: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      img: fullMetal,
      rating: 9.1,
      link: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
    },
    {
      title: "Death Note",
      img: deathnote,
      rating: 8.6,
      link: "https://myanimelist.net/anime/1535/Death_Note"
    },
    {
      title: "My Hero Academia",
      img: myHero,
      rating: 7.9,
      link: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia"
    },
    {
      title: "Demon Slayer",
      img: demonSlayer,
      rating: 8.6,
      link: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba"
    },
    {
      title: "Sword Art Online",
      img: swordArt,
      rating: 7.2,
      link: "https://myanimelist.net/anime/11757/Sword_Art_Online"
    },
    {
      title: "Tokyo Ghoul",
      img: tokyoGhoul,
      rating: 7.8,
      link: "https://myanimelist.net/anime/22319/Tokyo_Ghoul"
    },
    {
      title: "One Punch Man",
      img: onePunch,
      rating: 8.5,
      link: "https://myanimelist.net/anime/30276/One_Punch_Man"
    }
  ];
  

  return (
    <div>
      <div className='cards'>
        {Animes.map((anime: Anime) => {
          return (
            <Cards
              title={anime.title}
              img={anime.img}
              rating={anime.rating}
              link={anime.link}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App
