import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import './Main.css';
import Data from './static/data24.json'; // Import the JSON data

function LeftBlog({ onHeadingClick }) {
  // Extract the keys from the JSON data to create accordion items
  const topics = Object.keys(Data);

  function capitalizeFirstLetter(str) {
    if (str.length === 0) return str; // Check if the string is empty
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const handleClick = (heading) => () => {
    const heading2 = capitalizeFirstLetter(heading)
    onHeadingClick(heading2);
  };

  return (
    <>
      <Accordion defaultActiveKey="0" className='my-2'>
        {topics.map((topic, index) => (
          <Accordion.Item eventKey={index.toString()} key={topic}>
            <Accordion.Header>
              <a onClick={handleClick(topic)}>{`${topic.charAt(0).toUpperCase() + topic.slice(1)} 2024`}</a>
            </Accordion.Header>
            <Accordion.Body>
              {/* Only show the titles of the blog entries */}
              {Data[topic].map((item, i) => (
                <ListGroup.Item key={i}>
                  <p className='accTopic'>⚬ {item.title}</p>
                </ListGroup.Item>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}

export default LeftBlog;
