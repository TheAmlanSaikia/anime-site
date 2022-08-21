import PrimarySearchAppBar from "./Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ListPage.css";
import AnimeCard from "./Components/Card";

const ListPage = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/anime");
        const responseList = response.data.data;
        console.log(responseList);
        setAnimeList(responseList);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <PrimarySearchAppBar />
      <div className='displayBody'>
        {animeList &&
          animeList.map((item) => {
            return (
              <AnimeCard
                title={item.title}
                jTitle={item.title_japanese}
                image={item.images.webp.image_url}
                rating={item.rating}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ListPage;
