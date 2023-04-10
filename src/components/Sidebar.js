import React from 'react'
import styled from 'styled-components';
import shubhashish from '../images/shubhashish.jpg';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;

  ${'' /* background-color: pink; */}
`;
const Image = styled.img`
    width: 80%;
    height: 300px;
    border-radius: 25px;
    border: 2px solid #7001AF;
    object-fit: cover;
    ${'' /* margin: 20px 0; */}
    transform: rotate(-2deg);
`;
const Title = styled.div`
  color: #fff;
  font-size: 35px;
  font-weight: 600;
`;
const Tag = styled.h3`
  text-decoration: underline;
  font-weight: 600;
  color: white;
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &: hover{
    background-color: #${(props => props.color)};
  }
`;
const Button= styled.button`
  margin-top: 10px; 
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 25px;
  background-color: black;
  color: white;
`;

const Sidebar = () => {
  return (
    <Container>
      <Image src={shubhashish}/>
          <Title>Shubhashish</Title>
          <Tag>Web Developer</Tag>
      <SocialMedia>
        <SocialIcon color="385999">
            <Facebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
            <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
            <Twitter />
        </SocialIcon>
        <SocialIcon color="0072b1 ">
            <LinkedIn />
        </SocialIcon>              
      </SocialMedia>
      <Button>Download CV</Button>
    </Container>
  )
}

export default Sidebar;