import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Carousel} from 'react-bootstrap';
import './navbar.css';

class HeaderMenu extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                    <img src='./svg/half-moon-moon-svgrepo-com.svg' id="logo"/>
                        肖宇梁 Rainco </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">主页</Nav.Link>
                            <Nav.Link href="#link">图库</Nav.Link>
                            <NavDropdown title="角色" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#role/zql">张起灵</NavDropdown.Item>
                            <NavDropdown.Item href="#role/mr">米若</NavDropdown.Item>
                            <NavDropdown.Item href="#role/yao">东方曜</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#role/others">其他</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
        </Navbar>)
    }
}

class HomeCarousel extends React.Component {
    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/kylinZhang.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/Home_HugMoon_crop.JPG"
                    alt="Second slide"
                    />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>)
    }
}

export {HeaderMenu, HomeCarousel};