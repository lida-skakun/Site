import React from 'react';
import {render} from 'react-dom';
import {Carousel, Item} from 'react-bootstrap';
import styles from '../../Style/templates.css';

export default class Templates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 4000,
        };
    }
    render () {
        return 	<div id="templates">
            <h1>Website Templates</h1>
            <Carousel interval={this.state.interval}>
                <Carousel.Item>
                    <img alt="template #1" src="img/one.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #2" src="img/two.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #3" src="img/three.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #4" src="img/four.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #5" src="img/five.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #6" src="img/six.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #7" src="img/seven.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #8" src="img/eight.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #9" src="img/nine.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #10" src="img/ten.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #11" src="img/eleven.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #12" src="img/twelve.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="template #13" src="img/thriteen.png"/>
                </Carousel.Item>
            </Carousel>
        </div>;
    }
}