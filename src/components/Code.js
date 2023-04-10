import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

const Container = styled.div``;

const Code = ({ children, language }) => {
    console.log(children)
  return (
    <Container>
      <SyntaxHighlighter 
        language={language}
        style= {materialDark}
      >
        {children[0]}
      </SyntaxHighlighter>
    </Container>
  )
}

export default Code;