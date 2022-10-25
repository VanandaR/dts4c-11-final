import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../features/newsSlice";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";

const NewsList = () => {
  const { entities, title, loading } = useSelector((state) => state.news);
  // console.log(entities);
  if (loading) {
    return (
      <Stack alignItems="center" height="100vh">
        <CircularProgress color="primary" />
      </Stack>
    );
  } else {
    return (
      <>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Roboto", marginBottom: "1rem" }}
        >
          {title}
        </Typography>
        {entities.articles?.map((data, i) => {
          return (
            <Card
              key={i}
              sx={{
                marginBottom: 5,
                boxShadow: "2px 2px 4px 4px rgba(0,0,0,0.4)",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={data.urlToImage}
                sx={{ objectFit: "none", borderRadius: "5px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button href={data.url} target="_blank" size="small">
                  Read More
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </>
    );
  }
};

export default NewsList;
