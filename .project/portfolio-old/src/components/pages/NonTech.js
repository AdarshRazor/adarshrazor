import React from "react";
import { Container, Col, Row, ListGroup, Image } from "react-bootstrap";
import nonFiction from "../static/JSON/nontech.json";
import "../styles/NonTech.css";
import Carousels from "../Carousels";
import Carouselssocial from "../Carouselssocial";
import Carouselsillustration from "../Carouselsillustration";
import CarouselsUnfiltered from "../CarouselsUnfiltered";
import Insta from '../static/photos/icons/insta.png'
import unfilt from '../static/photos/icons/unfiltered.png'
import illus from '../static/photos/icons/illus.png'

class NonTech extends React.Component {
  render() {
    return (
      <>
        <Container className="recommendations-container">
          <Row>
            <Col md={4} xs={12} className="music-section">
              <h3>Music</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <iframe
                    title="Indie_Songs"
                    src="https://open.spotify.com/embed/playlist/2nqTO4p8xkIlISuOeApKLD"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </ListGroup.Item>
                <ListGroup.Item>
                  <iframe
                    title="EDM Drop"
                    src="https://open.spotify.com/embed/playlist/32eZGIT6tdHaBXfq6wf5td"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </ListGroup.Item>
                <ListGroup.Item>
                  <iframe
                    title="Hindi_u_like"
                    src="https://open.spotify.com/embed/playlist/3aiCvbIhqwU0NgE9bDzFFh"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </ListGroup.Item>
                <ListGroup.Item>
                  <iframe
                    title="Shazam Tracks"
                    src="https://open.spotify.com/embed/playlist/3ld95JnbTEoE9q6qiZD9Jq"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={8} xs={12} className="non-fiction-section">
              <Row>
                <Col md={6} xs={12}>
                  <h3>Non-Fiction</h3>
                  <ListGroup variant="flush">
                    {nonFiction["col1"].map((item, index) => (
                      <ListGroup.Item key={index}>
                        {item.book}, {item.author1}
                        {item.author2}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col md={6} xs={12}>
                  <h3>Misc . . .</h3>
                  <ListGroup variant="flush">
                    {nonFiction["col2"].map((item, index) => (
                      <ListGroup.Item key={index}>
                        {item.things}
                        {item.itemlink && (
                          <a
                            href={item.itemlink}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            {" "}
                            {item.icon}
                          </a>
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="bottom-sections">
            <Col md={4} xs={12} className="food-section">
              <h3>Food</h3>
              <ListGroup.Item>
                <a
                  href="https://www.zomato.com/hyderabad/bawarchi-rtc-x-roads"
                  target="_blank"
                  rel="noreferrer"
                >
                  Authentic Hyderabadi Biryani{" "}
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://motimahal.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Butter Chicken and Garlic Naan
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.zomato.com/goa/burger-factory-anjuna"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blue Cheese, Bacon and Avocado Burger
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.zomato.com/ncr/the-big-chill-cafe-connaught-place-new-delhi"
                  target="_blank"
                  rel="noreferrer"
                >
                  New York Cheesecake
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.zomato.com/mangalore/maharaja-restaurant-balmatta-delhi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mangalorean Ghee Roast Chicken and Neer Dosa
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.zomato.com/bangalore/leon-grill-koramangala-1st-block-bangalore"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chicken Popcorn Rice Bowl
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.zomato.com/bangalore/a2b-adyar-ananda-bhavan-marathahalli-bangalore"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ghee Roast Dosa
                </a>
              </ListGroup.Item>
            </Col>
            <Col md={4} xs={12} className="movies-shows-section">
              <h3>Movies and Shows</h3>
              <ListGroup.Item>One Piece</ListGroup.Item>
              <ListGroup.Item>Breaking Bad</ListGroup.Item>
              <ListGroup.Item>How I Met Your Mother</ListGroup.Item>
              <ListGroup.Item>South Park</ListGroup.Item>
              <ListGroup.Item>The Office</ListGroup.Item>
              <ListGroup.Item>Your Name</ListGroup.Item>
              <ListGroup.Item>FRIENDS</ListGroup.Item>
            </Col>
            <Col md={4} xs={12} className="podcasts-section">
              <h3>Podcasts</h3>
              <ListGroup.Item>
                <a href="https://open.spotify.com/show/2dR1MUZEHCOnz1LVfNac0j?si=7d7f1e207fa74063">
                  Lenny's Podcast
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://lexfridman.com/podcast/">
                  Lex Fridman Podcast
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://open.spotify.com/show/1VyK52NSZHaDKeMJzT4TSM?si=15912f00fb874019">
                  The Knowledge Project
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://open.spotify.com/show/02fM1JHpt9HmHGp482K71b?si=d27fba75fbf14a09">
                  Developer Tea
                </a>
              </ListGroup.Item>
            </Col>
          </Row>
          <Row>
            <Col md={8} xs={12} className="non-fiction-section">
              <h3>Photos 📷</h3>
              <Carousels />
            </Col>
            <Col md={4} xs={12} className="non-fiction-section">
              <h3>30 under 30 🇮🇳</h3>
              <Row>
                <Col md={6} xs={12}>
                  <div className="under30">
                    <ListGroup.Item>Andhra Pradesh</ListGroup.Item>
                    <ListGroup.Item>Arunachal Pradesh</ListGroup.Item>
                    <ListGroup.Item>Assam</ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        textDecoration: "line-through",
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Bihar
                    </ListGroup.Item>
                    <ListGroup.Item>Chhattisgarh</ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        textDecoration: "line-through",
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Delhi
                    </ListGroup.Item>
                    <ListGroup.Item>Goa</ListGroup.Item>
                    <ListGroup.Item>Gujarat</ListGroup.Item>
                    <ListGroup.Item>Haryana</ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        textDecoration: "line-through",
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Himachal Pradesh
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        textDecoration: "line-through",
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Jharkhand
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        textDecoration: "line-through",
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Jammu & Kashmir
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        textDecoration: "line-through",
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Karnataka
                    </ListGroup.Item>
                    <ListGroup.Item>Kerala</ListGroup.Item>
                    <ListGroup.Item>Madhya Pradesh</ListGroup.Item>
                  </div>
                </Col>
                <Col md={6} xs={12}>
                  <div className="under30">
                    <ListGroup.Item>Maharashtra</ListGroup.Item>
                    <ListGroup.Item>Manipur</ListGroup.Item>
                    <ListGroup.Item>Meghalaya</ListGroup.Item>
                    <ListGroup.Item>Mizoram</ListGroup.Item>
                    <ListGroup.Item>Nagaland</ListGroup.Item>
                    <ListGroup.Item>Odisha</ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        textDecoration: "line-through",
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Punjab
                    </ListGroup.Item>
                    <ListGroup.Item>Rajasthan</ListGroup.Item>
                    <ListGroup.Item>Sikkim</ListGroup.Item>
                    <ListGroup.Item>Tamil Nadu</ListGroup.Item>
                    <ListGroup.Item>Telangana</ListGroup.Item>
                    <ListGroup.Item>Tripura</ListGroup.Item>
                    <ListGroup.Item>Uttar Pradesh</ListGroup.Item>
                    <ListGroup.Item>Uttarakhand</ListGroup.Item>
                    <ListGroup.Item>West Bengal</ListGroup.Item>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={4} xs={12}>
              <h3>Un_filtered 
              <Image src={unfilt} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/>
              </h3>
              <CarouselsUnfiltered />
            </Col>
            <Col md={4} xs={12}>
              <h3>Social 
              <Image src={Insta} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/>
              </h3>
              <Carouselssocial />
            </Col>
            <Col md={4} xs={12}>
              <h3>Illus
              <Image src={illus} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/>
              </h3>
              <Carouselsillustration />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default NonTech;
