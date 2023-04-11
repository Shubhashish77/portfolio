import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  color: white;
  ${'' /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */}
  margin: auto auto;
`;

const Title = styled.div`
  font-size: ${(props => props.size)};
  font-weight: 800; 
  color: ${(props => props.color)};
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 600; 
  color: ${(props => props.color)};
  letter-spacing: 1px;
`
const LogoContainer = styled.div`
  display: flex;
`;

const Logo = styled.img`
  display: flex;
  padding-right: 30px;
  justify-content: space-between;
  width: 200px;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Title color="#7001AF" size="60px">Hello!</Title>
        <br />
        <Text color="#F3F4F6">
          I'm Shubhashish, an enthusiastic full-stack developer with 1 year of experience looking for a Full-stack position at a medium-sized startup/company.
        </Text>
        <Title color="#7001AF" size="40px">Worked At</Title>
        <LogoContainer>
          <Logo src='https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_logo.svg' />
          <Logo src='https://s3-cdnwhjr.whjr.online/website/desktop/logo_whjr.png' />
        </LogoContainer>
      </Wrapper>
    </Container>
  )
}

export default Home;