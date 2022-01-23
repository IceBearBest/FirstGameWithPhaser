import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Carousel} from 'react-bootstrap';
import './navbar.css';
import data from './description.json';
const pathPrefix = "./images/16to9/";

// Render the Nav bar 
// (The links does not work for now, need to learn about how to redirect pages)
class HeaderMenu extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                    <img src='./svg/half-moon-moon-svgrepo-com.svg' id="logo" alt="half-moon"/>
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

// class CarouselImage extends React.Component{
//     render(){
//         return(
//             <Carousel.Item>
//                 <img
//                 className="d-block w-100"
//                 src={pathPrefix.concat(this.props.path)}
//                 alt="Second slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>pathPrefix.concat(this.props.path)</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         )
//     }
// }


class HomeCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                {Object.entries(data).map(([_, value])=>(
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pathPrefix.concat(value.name)}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <p class="description">{value.title}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>)
    }
}


export {HeaderMenu, HomeCarousel};