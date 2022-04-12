import "./Navbar1.css";
import {
  Card,
  Col,
  Row,
  Navbar,
  Container,
  CardGroup,
  Button,
  Nav,
} from "react-bootstrap";
import imgpotato from "../components/Potato nft  (2)/evel.png";
import img31 from "../components/Potato nft  (2)/dottet circle.png";
import img10 from "../components/Potato nft  (2)/header circek background.png";
import img0 from "./0.png";
import img194 from "./194.png";
import img195 from "./195.png";
import img197 from "./197.png";
import img3 from "./img3.png";
import img193 from "./img193.png";
import img199 from "./199.png";
import img198 from "./198.png";
import img196 from "./196.png";
import img6 from "./img6.png";

const Navbar1 = () => {
  return (
    <div className="maindiv">
      <Navbar expand="sm" variant="dark" bg="dark">
        <Navbar.Brand
          style={{ paddingLeft: "20px", cursor: "pointer" }}
          href="#home"
        >
          Potato Head
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link id="link" style={{ cursor: "pointer" }} href="#about">
            About
          </Nav.Link>
          <Nav.Link id="link" style={{ cursor: "pointer" }} href="#benefit">
            Benefit
          </Nav.Link>
          <Nav.Link id="link" style={{ cursor: "pointer" }} href="#collection">
            Collection
          </Nav.Link>
          <Nav.Link id="link" style={{ cursor: "pointer" }} href="#intro">
            Roadmap
          </Nav.Link>
          <Nav.Link
            id="button-connect"
            style={{ cursor: "pointer" }}
            href="#connectwallet"
          >
            Connect Wallet
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="App-header">
        <Container>
          <Row>
            <Col style={{ paddingTop: "5%", paddingBottom: "10%" }}>
              <Card.Img
                variant="top"
                style={{
                  textAlign: "center",
                  padding: "30px",
                }}
                src={img10}
              />
              <Card
                style={{
                  marginTop: "-100%",
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: " #0F0F23",
                  paddingTop: "2%",
                }}
              >
                <Card.Body className="card123">
                  <Card.Title className="cardtitle">Discover, find,</Card.Title>
                  <Card.Subtitle className="cardsubtitle">
                    Sell extraordinary
                  </Card.Subtitle>

                  <h1 className="cardtitle144">Potato NFTs</h1>
                  <Card.Text className="text-lg" style={{ opacity: "0.6" }}>
                    Marketplace for potato character collections non fungible
                    token NFTs
                  </Card.Text>
                  <Button
                    className="button155"
                    style={{ marginTop: "4%", marginLeft: "4%" }}
                  >
                    How it Works
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                className="devilpotatocard"
                style={{
                  background:
                    "linear-gradient(90deg, #241D40 0%, #1C2946 100%)",
                  height: "80%",
                  width: "80%",
                  marginTop: "50px",
                  borderRadius: "35px",
                  borderColor: "#374153",
                }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2.8rem" }}>
                    Devil Potato
                    <Card.Img src={imgpotato} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="App-header">
        <Container>
          <Row>
            <Col>
              <Card
                style={{
                  width: "20rem",
                  background:
                    "linear-gradient(90deg, #241D40 0%, #1C2946 100%)",
                  borderRadius: "15px",
                }}
              >
                <Card.Body
                  style={{
                    background:
                      "linear-gradient(90deg, #241D40 0%, #1C2946 100%)",
                    borderRadius: "30px",
                  }}
                >
                  <Card.Img variant="top" src={img3} />
                  <div style={{ textAlign: "center" }}>
                    <div>Potato1</div>
                    <div>#1234</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <h1
                id="about"
                style={{
                  color: "#68CEEE",
                  paddingBottom: "1.4rem",
                  textAlign: "center",
                }}
              >
                About Us
              </h1>
              <h1 style={{ textAlign: "center" }}>What is an NFT? </h1>
              <Card
                style={{
                  backgroundColor: "#232c64",
                  textAlign: "center",
                }}
              >
                <Card.Body>
                  <div style={{ width: "100%" }}>
                    An NFT, which stands for non-fungible token, is a unique
                    unit of data employing technology that allows digital
                    content—from videos to songs to images—to become logged and
                    authenticated on cryptocurrency blockchains, primarily
                    Ethereum.The main impact of NFTs is making it easy to own
                    and sell digital content.
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="App-header">
        <Card
          style={{
            border: "none",
            width: "100%",
            textAlign: "center",
            backgroundColor: "#0F0F23",
            display: "inline",
            objectFit: "cover",
            backgroundImage: `url(${img31})`,
          }}
        >
          <Card.Body>
            <Card.Img
              style={{ height: "auto", width: "100%", zIndex: "2" }}
              src={img31}
            />
            <Card.ImgOverlay>
              <Card.Title id="collection" className="mb-2">
                {" "}
                Collections
              </Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Sell extraordinary</Card.Subtitle> */}
              <h4
                style={{
                  fontWeight: "700",
                  fontSize: "3rem",
                  position: "relative",
                  zIndex: "2",
                }}
              >
                Are you curious to our
              </h4>
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "560%",
                  color: "#67CDF1",
                }}
              >
                {" "}
                Potato NFTs
              </h1>
              <Card.Text className="text-lg" style={{ fontSize: "1.3rem" }}>
                Marketplace for potato character collections non fungible token
                NFTs
              </Card.Text>
              <Button
                className="button155"
                style={{ marginTop: "4%", marginLeft: "4%" }}
              >
                Check Our Collection
              </Button>
            </Card.ImgOverlay>
          </Card.Body>
        </Card>
        <Container></Container>
      </div>

      <div className="App-header">
        <Row>
          <CardGroup id="card555">
            <Col>
              <Card
                className="card55"
                style={{
                  width: "15rem",
                  backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body>
                  <Card.Img variant="top" src={img198} />
                  <div className="new">
                    <div>
                      <h5>AngryPotato1</h5>
                      <h6>#1234</h6>
                      <button
                        style={{
                          backgroundColor: "#3C47DF",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                        }}
                      >
                        Common
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card55"
                style={{
                  width: "15rem",
                  backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img193} />
                  <div className="new">
                    <div>
                      <h5>AngryPotato1</h5>
                      <h6>#1234</h6>
                      <button
                        style={{
                          backgroundColor: "#DFBD36",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                        }}
                      >
                        Common
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card55"
                style={{
                  width: "15rem",
                  backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img199} />
                  <div className="new">
                    <div>
                      <h5>AngryPotato1</h5>
                      <h6>#1234</h6>
                      <button
                        style={{
                          backgroundColor: "#DF4037",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                        }}
                      >
                        Common
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card55"
                style={{
                  width: "15rem",
                  backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img196} />
                  <div className="new">
                    <div>
                      <h5>AngryPotato1</h5>
                      <h6>#1234</h6>
                      <button
                        style={{
                          backgroundColor: "#3C47DF",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                        }}
                      >
                        Common
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </CardGroup>
        </Row>
      </div>

      <div className="App-header">
        <Container>
          <Row>
            <Col style={{ textAlign: "left" }}>
              <Card
                style={{
                  width: "100%",
                  textAlign: "left",
                  backgroundColor: " #0F0F23",
                  border: "none",
                }}
              >
                <Card.Body>
                  <h1
                    style={{
                      color: "#67CDF1",
                      fontWeight: "700",
                      fontSize: "3.7rem",
                    }}
                    id="intro"
                  >
                    Introduce
                  </h1>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "100%",
                  textAlign: "left",
                  backgroundColor: " #0F0F23",
                  border: "none",
                }}
              >
                <Card.Body>
                  <h1
                    style={{
                      color: "#67CDF1",
                      fontWeight: "700",
                      fontSize: "3.7rem",
                    }}
                  >
                    Ourselves
                  </h1>
                </Card.Body>
              </Card>
              <h6 style={{ color: "#84BDC4" }}>
                1000 total Potato-Head each awesome and unique. Although all are
                awesome some are more awesome than others. Each one is hand
                drawn and randomly generated from 143+ possible traits ranging
                from 7 categories: Background, Bottom lid, body, eyes, hands,
                mouth, legs.
              </h6>
            </Col>
            <Col>
              <div className="App-header">
                <div className="App-card">
                  <>
                    <Card
                      style={{
                        width: "100%",
                        backgroundColor: " #0F0F23",
                        border: "none",
                      }}
                    >
                      {/* <Card.Header></Card.Header> */}
                      <Card.Body>
                        <Card.Title style={{ fontSize: "2rem" }}>
                          <span style={{ fontSize: "4rem" }}>01 </span>
                          High-quality rendered and equally affordable artwork
                        </Card.Title>
                        <Card.Title></Card.Title>
                      </Card.Body>
                      <hr></hr>
                    </Card>

                    <Card
                      style={{
                        width: "100%",
                        backgroundColor: " #0F0F23",
                        border: "none",
                      }}
                    >
                      {/* <Card.Header></Card.Header> */}
                      <Card.Body>
                        <Card.Title style={{ fontSize: "2rem" }}>
                          <span style={{ fontSize: "4rem" }}>02 </span>
                          Learning,researching, and studying the crypto market
                          daily
                        </Card.Title>
                      </Card.Body>
                      <hr></hr>
                    </Card>

                    <Card
                      style={{
                        width: "100%",
                        backgroundColor: " #0F0F23",
                        border: "none",
                      }}
                    >
                      {/* <Card.Header></Card.Header> */}
                      <Card.Body>
                        <Card.Title style={{ fontSize: "2rem" }}>
                          <span style={{ fontSize: "4rem" }}>03 </span>
                          The immersive world of NFTs with all its collectors &
                          projects
                        </Card.Title>
                      </Card.Body>
                      <hr></hr>
                    </Card>

                    <Card
                      style={{
                        width: "100%",
                        backgroundColor: " #0F0F23",
                        border: "none",
                      }}
                    >
                      {/* <Card.Header></Card.Header> */}
                      <Card.Body>
                        <Card.Title style={{ fontSize: "2rem" }}>
                          <span style={{ fontSize: "4rem" }}>04 </span>
                          Slow,steady and natural community growth within the
                          Lazy Lounge Club
                        </Card.Title>
                      </Card.Body>
                      <hr></hr>
                    </Card>
                  </>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="benefit" className="App-header">
        <div className="App-card1">
          <Card
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "#0F0F23",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title>Benefits</Card.Title>
              <Card.Link href="#" style={{ textDecoration: "none" }}>
                <h1 style={{ color: "#67CDF1", textDecoration: "none" }}>
                  What make us different?
                </h1>
              </Card.Link>
            </Card.Body>
          </Card>
          <div className="App-header">
            <Container>
              <Row>
                <Col>
                  <Card
                    className="card155"
                    style={{
                      width: "25rem",
                      padding: "8%",
                      textAlign: "center",
                      backgroundColor: " #181832",
                      // border:"wh"
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{ fontSize: "1.5rem", opacity: "0.8" }}
                      >
                        Explosive and rare tokens
                      </Card.Title>
                      <Card.Text style={{ fontSize: "17px" }}>
                        With a hard limit at 10,00 and all copyrights held by
                        the buyer
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    className="card155"
                    style={{
                      width: "25rem",
                      padding: "8%",
                      textAlign: "center",
                      backgroundColor: " #181832",
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{ fontSize: "1.5rem", opacity: "0.8" }}
                      >
                        Community
                      </Card.Title>
                      <Card.Text style={{ fontSize: "17px" }}>
                        Join our community to trade, play and display your pets
                        and arts
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    className="card155"
                    style={{
                      width: "25rem",
                      padding: "8%",
                      textAlign: "center",
                      backgroundColor: " #181832",
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{ fontSize: "1.5rem", opacity: "0.8" }}
                      >
                        Members only space
                      </Card.Title>
                      <Card.Text style={{ fontSize: "17px" }}>
                        Discussion board where you can have a say in the future
                        of nft
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <div className="App-header">
        <h1 style={{ color: "#67CDF1", textAlign: "center" }}>
          {" "}
          Our Top NFT's
        </h1>
        <div className="container-fluid">
          <Row>
            <CardGroup
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                flexBasis: "auto",
              }}
            >
              <Col>
                <Card
                  style={{
                    background: "#0F0F23",
                    color: "white",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      style={{
                        borderRadius: "40px",
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                      src={img198}
                    />

                    <h5>AngryPotato #0001</h5>
                    <h6>0.5 SOL</h6>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  style={{
                    background: "#0F0F23",
                    color: "white",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      style={{
                        borderRadius: "40px",
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                      src={img0}
                    />
                    <h5>AngryPotato #0002</h5>
                    <h6>0.5 SOL</h6>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  style={{
                    background: "#0F0F23",
                    color: "white",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      style={{
                        borderRadius: "40px",
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                      src={img197}
                    />
                    <h5>AngryPotato #0003</h5>
                    <h6>0.5 SOL</h6>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  style={{
                    background: "#0F0F23",
                    color: "white",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      style={{
                        borderRadius: "40px",
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                      src={img195}
                    />
                    <h5>AngryPotato #0004</h5>
                    <h6>0.5 SOL</h6>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  style={{
                    background: "#0F0F23",
                    color: "white",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      style={{
                        borderRadius: "40px",
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                      src={img194}
                    />
                    <h5>AngryPotato #0005</h5>
                    <h6>0.5 SOL</h6>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  style={{
                    background: "#0F0F23",
                    color: "white",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      style={{
                        borderRadius: "40px",
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                      src={img196}
                    />

                    <h5>AngryPotato #0006</h5>
                    <h6>0.5 SOL</h6>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  style={{
                    background: "#0F0F23",
                    color: "white",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      style={{
                        borderRadius: "40px",
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                      src={img199}
                    />
                    <h5>AngryPotato #0007</h5>
                    <h6>0.5 SOL</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    background: "#0F0F23",
                    color: "white",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      style={{
                        borderRadius: "40px",
                        maxHeight: "10rem",
                        maxWidth: "10rem",
                      }}
                      src={img193}
                    />
                    <h5>AngryPotato #0008</h5>
                    <h6>0.5 SOL</h6>
                  </Card.Body>
                </Card>
              </Col>
            </CardGroup>
          </Row>
        </div>
      </div>
      <div className="App-header">
        <h1 style={{ color: "#67CDF1", textAlign: "center" }}>
          Some masterpieces from creator
        </h1>
        <Container>
          <Row>
            <Col>
              <Card
                className="card55"
                id="card555"
                style={{
                  width: "17rem",
                  // backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img199} />
                  <div className="Nft1">
                    <div>
                      <h5 style={{ color: "white" }}>AngryPotato #0016</h5>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creator
                      </h6>
                      <h6 style={{ color: "white", opacity: "0.6" }}>Louis</h6>
                    </div>
                    <div>
                      <button
                        style={{
                          backgroundColor: "#5652FB",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                          marginRight: "40px",
                        }}
                      >
                        SOL
                      </button>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        Current Bid
                      </h6>
                      <h5 style={{ color: "white" }}> 0.05 </h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card55"
                id="card555"
                style={{
                  width: "17rem",
                  // backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img198} />
                  <div className="Nft1">
                    <div>
                      <h5 style={{ color: "white" }}>AngryPotato #0089</h5>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creator
                      </h6>
                      <h6 style={{ color: "white", opacity: "0.6" }}>Louis</h6>
                    </div>
                    <div>
                      <button
                        style={{
                          backgroundColor: "#5652FB",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                          marginRight: "40px",
                        }}
                      >
                        SOL
                      </button>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        Current Bid
                      </h6>
                      <h5 style={{ color: "white" }}> 0.05 </h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card55"
                id="card555"
                style={{
                  width: "17rem",
                  // backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img197} />
                  <div className="Nft1">
                    <div>
                      <h5 style={{ color: "white" }}>AngryPotato #0098</h5>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creator
                      </h6>
                      <h6 style={{ color: "white", opacity: "0.6" }}>Louis</h6>
                    </div>
                    <div>
                      <button
                        style={{
                          backgroundColor: "#5652FB",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                          marginRight: "40px",
                        }}
                      >
                        SOL
                      </button>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        Current Bid
                      </h6>
                      <h5 style={{ color: "white" }}> 0.05 </h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card55"
                id="card555"
                style={{
                  width: "17rem",
                  // backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img196} />
                  <div className="Nft1">
                    <div>
                      <h5 style={{ color: "white" }}>AngryPotato #0192</h5>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creator
                      </h6>
                      <h6 style={{ color: "white", opacity: "0.6" }}>Louis</h6>
                    </div>
                    <div>
                      <button
                        style={{
                          backgroundColor: "#5652FB",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                          marginRight: "40px",
                        }}
                      >
                        SOL
                      </button>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        Current Bid
                      </h6>
                      <h5 style={{ color: "white" }}> 0.05 </h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="connectwallet"></div>
    </div>
  );
};

export default Navbar1;
