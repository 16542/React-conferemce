import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid black;
  gap:50px
`;
const Img = styled.img`
  flex: 2;
  border-radius:10px;
  width: 200px;
  height:100rem;


`;
const Information = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 150px;
  
`;
const Info = styled.span`
  font-family: 'Courier New', Courier, monospace;
font-size: 60px;
font-weight:bold ;
margin-top: 200px;



`;
const ContactWrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;



`;
const Speaker = () => {
  const [speaker, setSpeaker] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/speaker/${id}`)
      .then((res) => {
        setSpeaker(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Container>
      <Img src={speaker.img} />
      
      <Information>
      <Info>
        Speaker Name : {speaker.NameSpeaker}
      
      </Info>
      <Info>
        Speaker Nationality : {speaker.NaSpeaker}
      
      </Info>
      <Info>
        Speaker Telephone : {speaker.tel}
      
      </Info>
      </Information>
    </Container>
  );
};

export default Speaker;
