import React from 'react'
import { Card, Col, Container,Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

import whats from '../../assets/whtas.png'
import event from '../../assets/event.jpeg'
import Section1 from '../../components/sections/Section1'


export default function Home() {
  return (
   <>
    <div className='wrapper backround-imges'>

      <div>
      <Container>
      <div className="topHeader">
        <div className="d-flex">
            <div className="flex-grow-1 header-links">
                <ul className='d-flex p-0'>
                    <li><i className="fa fa-envelope-open icon" aria-hidden="true"></i>
                        <a href="#" className='ms-2 infto'>info@domain.com</a>
                    </li>
                    <li><i className="fa fa-map-marker icon" aria-hidden="true"></i>
                        <span  className='ms-2 infto'>250 Main Street, 2nd Floor. USA</span>
                    </li>
                </ul>
            </div>


            <div className="">
                <div className="header-dropdown">
                <div className="dropdown">
                    <button className="btn btn-sm border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                     <span className='ms-1'>English</span>
                    </button>
                    <ul className="dropdown-menu shadow border-0 rounded-0 ">
                        <li><a className="dropdown-item" href="#">Italian</a></li>
                        <li><a className="dropdown-item" href="#">German</a></li>
                        <li><a className="dropdown-item" href="#">French</a></li>
                        <li><a className="dropdown-item" href="#">Latvian</a></li>
                        <li><a className="dropdown-item" href="#">Spanish</a></li>  
                        <li><a className="dropdown-item" href="#">Greek</a></li>                    
                    </ul>
                    </div>                
                </div>
            </div>
            
         <div className="">
            <div className="header-social">
                <span className='social-label'>Get In Touch:</span>
                <a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                <a href="#"> <i className="fab fa-twitter" aria-hidden="true"></i></a>
                <a href="#"> <i className="fab fa-instagram" aria-hidden="true"></i></a>

            </div>
         </div>
        </div>
        </div>
      </Container>      
      </div>

    <div className="navbarr">
        <Navbar expand="lg" className='bg-body'>
        <Container>
        <Navbar.Brand href="#home"><h2>Logo</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <div className="">
          <a href="" className=''><img className='me-1' src={whats} alt="" width={40}/>
           <span className='span-grl'>(+244) 954324564</span>
          </a>
          <a href="" className='btn btn-gl ms-2'>Make Appointment</a>
          </div>
        </Navbar.Collapse>
      </Container>
     </Navbar>
    </div>

    <div className="p-5">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
   <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Row>
        <Col md={5}>
          <div className="carousel-caption d-none d-md-block">
            <span className='label-caption p-1'>Fintech Company Branding</span>
          <h2 className='mt-2'>Grow Your Online <br /> Store With Experts</h2>
          <p>Build a strong business without investing time and money into it</p>
          <div className="">
          <a href="" className='btn btn-gl'>Make Appointment</a>
          <a href="" className='ms-3'><img className='me-2' src={whats} alt="" width={40}/>
           <span className='span-grl'>(+244) 954324564</span>
          </a>
          </div>
          </div>
        </Col>
     <Col md={7}>
      <div className="box">
        <div className="content">
        <img src={event} alt="" className=" img-banner d-block w-100"/>
        </div>
      </div>
     </Col>
      </Row>
      
    </div>
    <div className="carousel-item">
            <img src="" alt="" className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
            <img src="" alt="" className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  </div>
</div>
</div>

<div className="about p-5">  
<Section1></Section1>
</div>
   
</>


  )
}
