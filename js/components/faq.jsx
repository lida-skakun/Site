import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import styles from '../../Style/faq.css';

export default class Faq extends React.Component {
    constructor(props) {
        super(props);
        this.showAnswer1 = this.showAnswer1.bind(this);
        this.hideAnswer1 = this.hideAnswer1.bind(this);
        this.showAnswer2 = this.showAnswer2.bind(this);
        this.hideAnswer2 = this.hideAnswer2.bind(this);
        this.showAnswer3 = this.showAnswer3.bind(this);
        this.hideAnswer3 = this.hideAnswer3.bind(this);
        this.showAnswer4 = this.showAnswer4.bind(this);
        this.hideAnswer4 = this.hideAnswer4.bind(this);
        this.showAnswer5 = this.showAnswer5.bind(this);
        this.hideAnswer5 = this.hideAnswer5.bind(this);
        this.showAnswer6 = this.showAnswer6.bind(this);
        this.hideAnswer6 = this.hideAnswer6.bind(this);
    }
    render () {
        return <div id="faq">
            <h1>Frequently asked questions</h1>
            <Row className="questions">
                <Col xs={12} sm={5} md={5} lg={5}>
                    <ul>
                        <li id="first_li" onMouseOver={this.showAnswer1} onMouseOut={this.hideAnswer1}>What do your websites cost?</li>
                        <li id="second_li" onMouseOver={this.showAnswer2} onMouseOut={this.hideAnswer2}>Will I have a say in the graphic design process?</li>
                        <li id="third_li" onMouseOver={this.showAnswer3} onMouseOut={this.hideAnswer3}>Do you provide copywriting services? How about photography?</li>
                        <li id="fourth_li" onMouseOver={this.showAnswer4} onMouseOut={this.hideAnswer4}>Do you provide web hosting services?</li>
                        <li id="fifth_li" onMouseOver={this.showAnswer5} onMouseOut={this.hideAnswer5}>Why should we hire your company?</li>
                        <li id="sixth_li" onMouseOver={this.showAnswer6} onMouseOut={this.hideAnswer6}>Another company says they can build a web site for us for $500. Why shouldn’t we use them?</li>
                    </ul>
                </Col>
                <Col xs={12} sm={7} md={7} lg={7}>
                    <div className="answers">
                        <div id="answer1" className="hidden">
                            The short answer: Our prices depend on so many factors, it’s impossible to say in one sentence. Avoid any web developer who can answer this question without a long talk. <br/>
                            The long answer: To get a better idea of the cost of what you want to build, give us a quick phone call. We’ll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc. Then we’ll be able to give you a ballpark figure. If you’re still interested, we’ll come to your place of business and come up with a firm quote. <br/> If you talk to a web developer who gives you an instant quote, run away! Imagine telling someone you want a car and having them immediately giving you a price for that car. Any fair and honest car salesperson would want to know the make, model and engine type of the car you’re looking to purchase, right? The same goes for building web sites. Depending on the features you want for your web site, the cost can be anywhere from a few thousand dollars to a few million.
                        </div>
                        <div id="answer2" className="hidden">
                            Absolutely. Our goal is to please you. We can’t do that without your input. If there are other sites with a design style that you would like to emulate, we can do that. If you have a logo or brand collateral that you’d like us to work around, that’s no problem. We’ll be sure your new site will be a consistent and integral part of your overall brand.
                        </div>
                        <div id="answer3" className="hidden">
                            Not directly, but if your project calls for copywriting, photography, original illustration, video or other creative service, just let us know. We have an extensive network of creative associates that we work with. We would be happy to make a recommendation.
                        </div>
                        <div id="answer4" className="hidden">
                            No. Most real web hosting companies have massive data centers that have hundreds of employees, triple power redundancy (in case of a blackout in the region) and 24-hour security staff guarding the facility.<br/>
                            When a local web developer claims that they also host web sites, they’re almost ertainly just a middleman for a real web host. That means that they mark up the cost of hosting and pass it along to you. And it means that if your server ever has a problem, you’ll have to go to them and they’ll contact your host for you. Are they on call 24-7? Of course not. Another major disadvantage to using a web developer as a host — if you’re ever dissatisfied with their service, they control the server that hosts your site. Extracting your company from the relationship could be very difficult.<br/>
                            We listen to your needs and suggest the most affordable web hosting option that meets the technical specifications of your new site. You’ll pay the host directly and you may contact them directly if you ever need to do so.
                        </div>
                        <div id="answer5" className="hidden">
                            Some firms love to build complicated sites. Not us. We choose the simplest tool that will effectively accomplish a task. Simple sites load faster, are easy to use and are less prone to problems.
                            <br/> Most of our clients have fun working with us. We make the web design process easy and pleasant. We speak in plain English, not techno-babble. And we love what we do for a living.
                                <br/> Our business has grown word-of-mouth and we intend to continue growing this way. We'll treat you fairly and do a great job so that you'll want to continue working with us after your site has launched. And, we want you to tell all your friends and colleagues about us.
                        </div>
                        <div id="answer6" className="hidden">
                            We’ve seen those ads on the side of the road, too. Be wary of anyone who says they’ll build you a web site or sell you a car for $500. There’s a possibility they’ll take your money and run. What’s more likely is that they’ll take your money and then build your site with a template. They may have a lot of templates to choose from, but they’ll all be rather generic. They’ll ask you for five pages of text and then slap it into a template and that’s it. You can’t have custom graphic design; you can’t have any interactivity; your site won’t be optimized for search engines and it will look like a $500 site. <br/>
                            Remember, a consultation with us is always free and we just might be able to prevent you from wasting a thousand bucks.
                        </div>
                    </div>
                </Col>
            </Row>
        </div> ;
    }
    showAnswer1() {
        answer1.classList.remove('hidden');
    }
    hideAnswer1() {
        answer1.classList.add('hidden');
    }
    showAnswer2() {
        answer2.classList.remove('hidden');
    }
    hideAnswer2() {
        answer2.classList.add('hidden');
    }
    showAnswer3() {
        answer3.classList.remove('hidden');
    }
    hideAnswer3() {
        answer3.classList.add('hidden');
    }
    showAnswer4() {
        answer4.classList.remove('hidden');
    }
    hideAnswer4() {
        answer4.classList.add('hidden');
    }
    showAnswer5() {
        answer5.classList.remove('hidden');
    }
    hideAnswer5() {
        answer5.classList.add('hidden');
    }
    showAnswer6() {
        answer6.classList.remove('hidden');
    }
    hideAnswer6() {
        answer6.classList.add('hidden');
    }
}