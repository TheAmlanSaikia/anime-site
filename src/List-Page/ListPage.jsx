import PrimarySearchAppBar from "./Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ListPage.css";
import AnimeCard from "./Components/Card";
import { useSelector } from "react-redux";
import { CheckBoxFilter } from "../Services/CheckBoxFilter";
import { SearchFilter } from "../Services/SearchFilter";


const ListPage = () => {
  const [animeList, setAnimeList] = useState(null);
  
/**
 * SidedEffect for getting the anime list from API
 */

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/anime");
        const responseList = response.data.data;
        setAnimeList(responseList);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const selectedFilter = useSelector( (state) => state.checkBoxValue);
  const searchText = useSelector((state) => state.searchQuery);

  const checkedData = CheckBoxFilter(animeList, selectedFilter);
  const searchedData = SearchFilter(checkedData,searchText);
  return (
    <div>
      <PrimarySearchAppBar />
      <div className='displayBody'>
        {animeList &&
         searchedData.map((item) => {
            return (
              <AnimeCard
                id={item.mal_id}
                key={item.mal_id}
                title={item.title}
                jTitle={item.title_japanese}
                image={item.images.webp.image_url}
                rating={item.rating}
                genre={item.genres[0].name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ListPage;
