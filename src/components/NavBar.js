import { Article, Home, Person } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import logo from '../images/letter-s.png';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 90%;
  height: 70px;
  display:flex;
  background-color: #21262D;
  margin: auto auto;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 0 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); 
  &:hover {
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.5);
  }
   ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* background-color: red; */}
`;

const Left = styled.h1`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-left: 20px;
  ${mobile({ marginLeft: "10px" })}
`;

const Image = styled.img`
  margin: 0;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  ${mobile({ height: "40px", width: "40px" })}
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 25px; 
  color: white;
  padding: 8px;
  border-radius: 25px;
  &:hover{
    background-color: #444444;
  }
  ${mobile({ fontSize: "20px", marginLeft: "10px", padding: "5px" })}
`;

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Image src={logo}/>
              <span>hubhashish</span>
            </Left>
            <Right>
              <Link to="/">
                <MenuItem>
                  {/* <Home style={{ marginRight: "5px" }} /> */}
                  Home
                </MenuItem>
              </Link>
              <Link to="/about">
                <MenuItem>
                  {/* <Person style={{marginRight: "5px"}}/> */}
                  About
                </MenuItem>
              </Link>
              <Link to="/blogs">
                <MenuItem>
                  {/* <Article style={{marginRight: "5px"}}/> */}
                  Blog
                </MenuItem> 
              </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default NavBar