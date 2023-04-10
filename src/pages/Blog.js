import React, { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx'
import Code from '../components/Code';
import { useLocation } from 'react-router-dom';

const Blog = () => {
  const {state} = useLocation();
  const [postContent, setPostContent] = useState(""); 
   
  useEffect(() => {
    import(`../blog/${state.item.file}.md`).then(res=> {
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostContent(response))
          .catch(err => console.log(err)) 
    })
  }, []); 

  return (
    <div style={{color: "white", padding: "50px"}}>
      <Markdown 
        options={{
          overrides: {
            code: {
                component: Code
            }
        },
      }}>
        {postContent}
      </Markdown>
    </div>
  )
}

export default Blog  