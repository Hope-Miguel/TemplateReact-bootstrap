import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


import Untitled from '../../assets/Untitled.png'




export default function Section1() {
  return (
    <div>
<Container>
<div className="section1 p-5">
    <ul className="nav nav-pills mb-5  about-tab" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Our Mission</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Our Vision</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Our Goals</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active mt-5" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
    <Row>
        <Col md={6}>
        <img src={Untitled} alt="" />
        </Col>
        <Col md={6}>
            <div>
                <span className='span-sectin'>Get and amazing</span>
                <h1 className='mt-2'>Get Right Solution for Your Business</h1>
                <p className='sectin-clr mt-3'>You can’t build a strong business without investing time and money into it. 
                    You’ll also need to promote your business and establish...</p>

                    <ul className="list-group">
                    <li className="list-group-item  border-0 sectin-clr">
                        <i className="fa fa-circle-check icon"></i>
                        <span className='ms-2'> Easy To Connect With Customer</span> 
                    </li>

                    <li className="list-group-item border-0 sectin-clr">
                    <i className="fa fa-circle-check icon"></i>
                        <span className='ms-2'> Interactive Growing Company From Startup</span>     
                    </li>

                    <li className="list-group-item border-0 sectin-clr">
                    <i className="fa fa-circle-check icon"></i>
                        <span className='ms-2'> Manage Your Business & Guide To Build</span>  
                        </li>
                    </ul>

                    <a href="" className='btn btn-gl mt-3'>Learn More</a>

            </div>
        </Col>
    </Row>
  </div>

  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">...</div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">...</div>
</div>
</div>
</Container>


</div>
  )
}
