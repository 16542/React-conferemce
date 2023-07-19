import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 100px;

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;

`;
const Center = styled.div`
  flex: 1;
  padding: 20px;

`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Title = styled.h3`
    margin-bottom:30px;
`;
const List = styled.ul`
  margin:0;
  padding:0;  
  list-style:none;
  display:flex;
  flex-wrap:wrap;

`;
const ListItem = styled.li`
  width:50% ;
  margin-bottom:10px;
`;

const SocialContainer = styled.div`
  display: flex;
  &:hover {
    transition: all 1.5s ease;
  }
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width:50%
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AHMED</Logo>
        <Desc>here is my favorite web site </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookSharpIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem> 
          <ListItem>React conference</ListItem>
          <ListItem>Norway </ListItem>
          <ListItem>Germany </ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Conference Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnSharpIcon  styled={{marginRight:"20px"}}/>Teboulba 5080 , Rue 23 Janvier
        </ContactItem>
        <ContactItem>
          <CallSharpIcon styled={{marginRight:"20px"}}/>+216 937 32 94 / +216 546 62 21
        </ContactItem>
        <ContactItem>
             <EmailOutlinedIcon styled={{marginRight:"20px"}}/>Contact@ahmedbk5080@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;