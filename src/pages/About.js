import React from 'react'
import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div`
  color: #fff;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  border-bottom: 2px solid #7001AF; 
`;
const Desc = styled.p`
  padding-top: 10px;
  letter-spacing: 2px;
`; 
const Bold = styled.b`
  color: #7001AF;
`;

const About = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                About
            </Title>
            <Desc>
              Hi, I am Shubhashish, a highly motivated and skilled full-stack software engineer with <Bold>14 months of combined internship and full-time experience</Bold>. While I have proficient knowledge in full-stack development, my passion lies in front-end development.
              <br/>
              <br/>
              My journey started as a technology intern at <Bold>WhiteHat Jr</Bold>, where I designed and developed an audit platform enabling auditors to review recorded classes based on predefined questions using cutting-edge technologies like <Bold>React, Node, Express, MySQL, and Material-UI</Bold>.
              <br/>
              <br/> 
              My next stint was with <Bold>Byju's</Bold>, where I spearheaded the front-end development of a data sharing application from scratch, enabling users to send confidential data or messages securely. Additionally, I have hands-on experience in DevOps and cost optimization, where I gained visibility into AWS.
              <br/>
              <br/>
              I am highly driven to expand my knowledge in front-end frameworks like React, Vue, or Angular and UI/UX design principles to create visually appealing and user-friendly interfaces. Furthermore, I am keen to explore back-end technologies such as databases and server-side frameworks to enhance my full-stack development capabilities.  
            </Desc>

        </Wrapper>
    </Container>
  )
}

export default About