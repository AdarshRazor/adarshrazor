import React from 'react'
import NavBlog from './Navbar'
import './Main.css'
import { useState } from'react'
import LeftBlog from './LeftBlog'
import MainBlog from './MainBlog'
import RightBlog from './RightBlog'

function Blog() {

  const [heading, setHeading] = useState("August");
  
  const handleClick = (newHeading) => {
    setHeading(newHeading);
  };

  return (
    <>
      <NavBlog/>
      <div className="MainBlog">
        <div className="left container">
          <LeftBlog onHeadingClick={handleClick}/>
        </div>
        <div className="center container">
          {heading && <MainBlog heading={heading}/>}
        </div>
        <div className="right container">
          <RightBlog/>
        </div>
      </div>
    </>
  )
}

export default Blog