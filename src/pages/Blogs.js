import React from 'react'
import styled from 'styled-components'
import { Blogdata } from '../data';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  ${'' /* padding: 35px; */}
`;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   color: #fff;
`;

const Card = styled.div`
  padding-top: 15px;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000; 
  border-radius: 25px;
`;

const Image = styled.img`
  width: 90%;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
`;

const Title = styled.div`
   margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  border-bottom: 2px solid #7001AF; 
`;

const Blogs = () => {

  const navigate = useNavigate();
  
  const navigateToPage = (item) =>{
    navigate(`/blog/${item.file}`, {
      state: {item}
    });
  }
  return (
    <Container >
        <Wrapper>
            <Title weight="800" size="50px">BLOGS</Title> 
            {Blogdata.map(item => (
                <Card key={item.id} onClick={()=>navigateToPage(item)}>
                   <Image src={item.icon}/>
                   <p>
                      {item.title}
                   </p>
                </Card>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Blogs