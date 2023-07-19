import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Pay from "./Pay";
import SpeakerCards from './SpeakerCards'
import axios from "axios";
import { useParams } from "react-router-dom";
const Header = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  margin-top: 50px;
`;

const EventName = styled.h1`
  flex: 2;
  font-size: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const Groupe = styled.div`
  flex-grow: 1;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;

`;
const Element = styled.h3`
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: #ff69b4;
  color: white;
  padding: 10px;
`;
const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Conference = () => {
  const [ conf , setConf] = useState({})
  const [speaker , setSpeaker] = useState([])
  let {id} = useParams()
  useEffect(()=>{
    axios.get(`http://localhost:5000/conference/${id}`).then((res)=>{
        setConf(res.data)
    }).catch(err=>{
      console.log(err);
    })
  } , [])

  useEffect(()=>{
    axios.get(`http://localhost:5000/speaker/`).then((res)=>{
          setSpeaker(res.data)
    }).catch(err=>{
      console.log(err);
    })
  } , [])
  return (
    <Container>
      <Header>
        <EventName>{conf.NameConf}</EventName>
        <Groupe>
          <Element>{conf.cost} $</Element>
          <Element>
            <Link>{conf.Location}</Link>
          </Element>
          <Element>
            <Link>More Info</Link>
          </Element>
        </Groupe>
      </Header>
      <Pay/>
      <SpeakerCards speakers={speaker}/>   
      <Footer/>

       </Container>
  );
};

export default Conference;
