import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const ConferencePage = () => {
  const [conf, setConf] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/conference/")
      .then((res) => {
        console.log(res.data);
        setConf(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {conf.map((elm, i) => (
        <Card sx={{ maxWidth: 345 }} key={i}>
          <CardMedia
            sx={{ height: 140 }}
            image={elm.Img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {elm.NameConf}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {elm.CodeConduct}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/${elm.IdConf}`}> Learn More </Link>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default ConferencePage;
