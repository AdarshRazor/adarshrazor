import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Main.css';
import Data from './static/data24.json'; // Import the JSON data

function MainBlog({ heading }) {
  // Fetch the relevant data based on the heading prop
  const blogData = Data[heading.toLowerCase()] || []; // Ensure heading matches keys in JSON

  return (
    <>
      <div className='heading-container my-2'>
        <h1>{heading} 2024</h1>
      </div>
      <div className='container'>
        {blogData.map((item, index) => (
          <Card key={index} className="my-4 cardbox">
            <Card.Title className='Blogtitle'>{item.title}</Card.Title>
            {item.image && (
              <Card.Img className="BlogImage" variant="top" src={item.image} alt={item.title} />
            )}
            <Card.Body>
              <Card.Text>{item.text}</Card.Text>
              {item.link && <Button variant="primary" href={item.link}>Go somewhere</Button>}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default MainBlog;
