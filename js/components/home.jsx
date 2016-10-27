import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col, Button, Modal, OverlayTrigger, FieldGroup, FormGroup} from 'react-bootstrap';
import styles from '../../Style/home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            showModal: false
        }
    }
    render () {
        return <div id="home">
            <div id="header">
                <p> Web design and development | <img src="img/mobilephoneoff.png"/>   Contact us: +38 093 914 26 46
                    <img title="Eng" src="img/united-kingdom-flag_9923.png" height="16" id="UK"/>
                </p>
            </div>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <nav id="navigation">
                        <ul>
                            <li><a href="index.html#home" title="Home">  HOME </a></li>
                            <li><a href="index.html#about" title="About"> ABOUT </a></li>
                            <li><a href="index.html#faq" title="FAQ"> FAQ </a></li>
                            <li><a href="index.html#templates" title="Templates"> TEMPLATES</a></li>
                            <li><a href="index.html#contacts" title="Contacts" > CONTACTS  </a></li>
                        </ul>
                    </nav>
                </Col>
            </Row>
            <Row>
                <Col id="header-img" xs={12} sm={12} md={12} lg={12}>
                    <div className="header-img">
                        <img className="img-responsive" src="img/Hojmft2FmnM.jpg" alt="header-img" id="header-img"/>
                        <input type="image" src="img/social_balloon-37.png" onClick={this.open} id="feedback"/>
                        <Modal show={this.state.showModal} onHide={this.close}>
                            <Modal.Header closeButton>
                                <Modal.Title>Feedback</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                <input type="phone" className="form-control" id="inputPhone" placeholder="Phone"/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.close}>Send</Button>
                                <Button onClick={this.close}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Col>
            </Row>
            <a href="index.html#home" title="Up">  <img id="arrow" src="img/137.png"/>  </a>
        </div> ;
        }
    open() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }
}

