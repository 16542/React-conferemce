import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export default function SpeakerCards({ speakers }) {
  console.log(speakers);
  return (
    <Container>
      {speakers.map((elm, i) => (
        <Card sx={{ maxWidth: 345 }} key={i}>
          <CardMedia
            sx={{ height: 140 }}
            image={elm.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {elm.NameSpeaker}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {elm.NaSpeaker} , {elm.tel}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/speaker/${elm.IdSpeaker}`}>Learn More</Link>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}
