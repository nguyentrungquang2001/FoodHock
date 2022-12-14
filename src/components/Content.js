import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { Tag } from "antd";
import {
  Container,
  Row,
  Col,
  Nav,
  CardGroup,
  Card,
  Button,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
// src/components/Item.js
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice";
import Context from "../Context/UserContext";
const Content = () => {
  const [limit, setlimit] = useState(10);
  const [list, setlist] = useState(0);
  const { cartData, setcartData, listCart, dataProduct } = useContext(Context);
  // console.log(cartData);
  // src/components/Item.js
  const dispatch = useDispatch();
  const loadMode = () => {
    setlimit((pre) => pre + 5);
  };
  const handleList = (data) => {
    console.log(data);
    setlist((pre) => (pre = 0));
    setlimit((pre) => (pre = 10));
  };
  const handleList1 = (data) => {
    console.log(data);
    setlist((pre) => (pre = 1));
    setlimit((pre) => (pre = 5));
  };
  const handleList2 = () => {
    setlist((pre) => (pre = 2));
    setlimit((pre) => (pre = 5));
  };
  const handleList3 = () => {
    setlist((pre) => (pre = 3));
    setlimit((pre) => (pre = 5));
  };
  const handleList4 = () => {
    setlist((pre) => (pre = 4));
    setlimit((pre) => (pre = 5));
  };
  const handleList5 = () => {
    setlist((pre) => (pre = 5));
    setlimit((pre) => (pre = 5));
  };
  const handleList6 = () => {
    setlist((pre) => (pre = 6));
    setlimit((pre) => (pre = 5));
  };
  // console.log(dataProduct);
  // const navigate = useNavigate();
  function close(id, img, name, price) {
    setcartData((pre) => [...pre, { id, img, name, price }]);
    // listCart;pre
    document.getElementById("close").style.display = "block";
    myFunction();
    function myFunction() {
      setTimeout(alertFunc, 3000);
    }
    function alertFunc() {
      document.getElementById("close").style.display = "none";
    }
    // setcartData(listCart);
  }

  return (
    <div className="content">
      <Container>
        <Row>
          <Col xs={2}>
            <Nav variant="pills" defaultActiveKey="link-0" className="listMenu">
              <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={handleList}>
                  T???t C??? S???n Ph???m
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={handleList1}>
                  M??n ??n ??u
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={handleList2}>
                  M??n ??n ??
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-6" onClick={handleList3}>
                  M??n ??n Th??i
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-5" onClick={handleList4}>
                  M??n ??n Nh???t B???n
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" onClick={handleList5}>
                  M??n ??n Trung Qu???c
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" onClick={handleList6}>
                  M??n ??n ?????a Trung H???i
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Row>
              <CardGroup>
                {dataProduct &&
                  dataProduct
                    .filter((i) =>
                      list === 0 ? i.list > list : i.list === list
                    )
                    .slice(0, limit)

                    .map((item) => (
                      <Col xs={3} key={item.id}>
                        {" "}
                        <Card>
                          <Card.Img variant="top" src={item.img} />
                          <Card.Body>
                            <Card.Title>{item.name.toString()}</Card.Title>
                            <Card.Text>
                              5 <FaStar color="#ffd839" />
                            </Card.Text>
                            <Card.Text>
                              <p className="priceProduct">{item.price} ??</p>
                            </Card.Text>
                            <Card.Text className="desProduct">
                              {item.des}
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <Button
                              variant="secondary"
                              // onClick={() =>
                              //   close(item.id, item.img, item.name, item.price)
                              // }
                              onClick={() =>
                                dispatch(
                                  addToCart({
                                    id: item.id,
                                    img: item.img,
                                    name: item.name,
                                    price: item.price,
                                  })
                                )
                              }
                            >
                              add cart
                            </Button>{" "}
                            <Link to={item.id}>
                              <Button variant="success">Mua</Button>{" "}
                            </Link>
                          </Card.Footer>
                        </Card>
                      </Col>
                    ))}
                {/* <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 ??</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col>

                <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 ??</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 ??</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 ??</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 ??</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 ??</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col> */}
              </CardGroup>
            </Row>{" "}
            <div className="loadMode">
              {" "}
              <Button variant="dark" onClick={loadMode}>
                Load Mode
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="notification" id="close">
        <Tag color="green" className="textNotification">
          th??m gi??? h??ng th??nh c??ng
        </Tag>
        <span className="close">x</span>
      </div>
    </div>
  );
};

export default Content;
