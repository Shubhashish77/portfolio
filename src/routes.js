import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import About from './pages/About';
import { mobile } from './responsive';


const Container = styled.div`
  margin: 0;
  width: 100%;
  height: calc(100vh - 90px);
  ${mobile({ height: `calc(200vh)` })}
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 100%;
  margin: 20px auto;
  ${'' /* padding: 20px; */}
  border-radius: 25px;
  background-color: #444444;
  display: flex;
  ${mobile({ flexDirection: "column-reverse" })}

`;

const Left = styled.div`
  flex: 1;
  ${'' /* max-width: 250px; */}
  ${'' /* overflow: auto; */}
  ${'' /* ${mobile({ flex: -1 })} */}

`;
const Right = styled.div`
  padding: 5%;
  flex: 3;
  background-color: #21262D;
  border-radius: 25px;
  overflow: auto;
  font-size: 25px;
  min-width: 50vw;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ${mobile({ flex: 1})}
`;

const routes = () => {
  return (
      <div style={{ background: "black" }}>
      <Router>
        <NavBar/>
        <Container>
            <Wrapper>
                <Left>
                    <Sidebar/>
                </Left>
                <Right>
                    {/* <Home/> */}
                    {/* <Blog/> */}
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/about' element={<About/>}/>
                        <Route exact path='/blogs' element={<Blogs/>}/>
                        <Route exact path='/blog/:file' element={<Blog/>}/>
                    </Routes>
                </Right>
            </Wrapper>
        </Container>
        
      </Router> 
    </div>
  )
}

export default routes;