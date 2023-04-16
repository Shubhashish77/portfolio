import React from 'react'
import styled from 'styled-components';
import shubhashish from '../images/shubhashish.jpg';
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${'' /* background-color: pink; */}
`;
const Image = styled.img`
    width: 80%;
    height: 50%;
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
  margin-right: 15px;
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

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  &: hover{
    color #fff;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Image src={shubhashish}/>
          <Title>Shubhashish</Title>
          <Tag>Web Developer</Tag>
      <SocialMedia>
        <SocialIcon color="000000">
            <Link
              href="https://github.com/Shubhashish77"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHub />
            </Link>
        </SocialIcon>
        {/* <SocialIcon color="E4405F">
            <Instagram />
        </SocialIcon> */}
        {/* <SocialIcon color="55ACEE">
            <Twitter />
        </SocialIcon> */}
        <SocialIcon color="0072b1 ">
            <Link
              href="https://linkedin.com/in/shubhashish-8a0636166/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </Link> 
        </SocialIcon>              
      </SocialMedia>
      <Button>
        <Link 
          href="https://drive.google.com/file/d/1DdFJsgq3gnnLUaFWIYzxYpcHA-LkjFKZ/view?usp=share_link"
          rel="noopener noreferrer"
          target="_blank"
        >
          Download CV
        </Link>
      </Button>
    </Container>
  )
}

export default Sidebar;