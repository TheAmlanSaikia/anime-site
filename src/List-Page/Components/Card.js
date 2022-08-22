import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToWatchLater, deletefromWatchLater } from "../../Redux/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function AnimeCard(props) {
  const dispatch = useDispatch();
  const addWatchLater = () => dispatch(addToWatchLater(props));
  const deleteWatchLater = () => dispatch(deletefromWatchLater(props));
  const watchLaterAnime = useSelector((state) => state.saveToLater);

  localStorage.setItem("Watchlater", JSON.stringify(watchLaterAnime));

  const storageItems = JSON.parse(localStorage.getItem("Watchlater") || []);

  return (
    <Card sx={{ width: 300, backgroundColor: "#FAF9F6" }}>
      <CardHeader title={props.title} />
      <CardMedia
        component='img'
        height='150'
        image={props.image}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          <h3>{props.jTitle}</h3>
          <h4>Rating:{props.rating}</h4>
          <h4>Genre:{props.genre}</h4>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {storageItems && storageItems.some((item) => item.id === props.id) ? (
          <IconButton aria-label='add to favorites' onClick={deleteWatchLater}>
            <FavoriteIcon style={{ color: "red" }} />
          </IconButton>
        ) : (
          <IconButton aria-label='add to favorites' onClick={addWatchLater}>
            <FavoriteIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
