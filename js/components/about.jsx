import React from 'react';
import {render} from 'react-dom';
import styles from '../../Style/about.css';


export default class About extends React.Component {
    render () {
        return <div id="about">
            <h1> Information about our company </h1>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div id="about_row">
                            <img src="icons/people_8694.png"/>
                                <h2>Who we are?</h2>
                                <p>Founded in 2015, we are a small web design & development agency based in Kyiv, Ukraine. Over the last year we've made a reputation for building websites that look great and are easy-to-use. </p>
                                <p> If you like what we do, and think we could work together, then get in touch or launch our project planner.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div id="about_row">
                            <img src="icons/preferences-calendar-and-tasks_4520.png"/>
                                <h2> We offer solutions</h2>
                                <p>   For those who have ideas: we can be a collaborative partner. For those who can’t afford downtime: our support team will keep you up and running. For those looking to connect to the cloud: we can link you. We help you create, build, start up and maintain. </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div id="about_row">
                            <img src="icons/imgonline-com-ua-resize-DQ2B0NETs4.jpg"/>
                                <h2>Business Analysis & Consulting</h2>
                                We provide a detailed analysis to inform digital growth for your business.
                                    <ul>
                                        <li>We set up startups for success</li>
                                        <li>Develop a business plan and pitch deck to gain investor support</li>
                                        <li>Ongoing consultation to optimize your business</li>
                                    </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div id="about_row">
                            <img src="icons/user_info_5274.png"/>
                                <h2>Information Architecture & User Experience</h2>
                                Every website starts with a wireframe. Our UX experts provide detailed blueprints for high-performance websites.
                                    <ul>
                                        <li>We plan websites with relevant content for your audience</li>
                                        <li>User-pathways improve website conversions</li>
                                        <li>Improve usability with an intuitive layout</li>
                                    </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div id="about_row">
                            <img src="icons/network2_3989.png"/>
                                <h2>Content Strategy & Copywriting</h2>
                                <br/>
                                    Unify your brand messaging and engage your audience across all media with content strategy and copywriting.
                                        <ul>
                                            <li>We create content that converts</li>
                                            <li>Start your communication strategy with a strong foundation</li>
                                            <li>We write compelling copy that leads to website performance</li>
                                        </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div id="about_row">
                            <img src="icons/imgonline-com-ua-resize-FlGDhvYW6R.jpg"/>
                                <h2>Design</h2>
                                <br/>
                                    <p>We don't provide multiple concepts from the outset as we believe it dilutes ideas - we prefer to focus on what we feel is the right approach.</p>
                                    <p>We try to make sure everything we design will scale down well to smaller screens like your tablet and phone. We’ll make a plan about how your design responds to different screen sizes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> ;
    }
}