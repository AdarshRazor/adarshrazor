import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import data from './static/imp.json'

function RightBlog() {
  return (
    <div className='my-2'>
    <h3>Important Links</h3>
    <ListGroup variant="flush">
        {data["important"].map((item, index) => (
            <ListGroup.Item key={index}>
                {<a href={item.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "black" }}> {item.title}</a>}
            </ListGroup.Item>
        ))}
    </ListGroup>
    </div>
  )
}

export default RightBlog