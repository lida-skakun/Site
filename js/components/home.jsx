import React from 'react';
import {render} from 'react-dom';

export default class Home extends React.Component {
    render () {
        return <div id="home">
            <div id="header">
                <p> Web design and development | <img src="mobilephoneoff.png"/>   Contact us: +38 093 914 26 46
                    <img title="Eng" src="united-kingdom-flag_9923.png" height="16" id="UK"/>
                </p>
            </div>
            <div className="container-fluide">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div id="navigation">
                            <nav>
                                <ul>
                                    <li><a href="index.html#home" title="Home">  HOME </a></li>
                                    <li><a href="index.html#about" title="About"> ABOUT </a></li>
                                    <li><a href="index.html#faq" title="FAQ"> FAQ </a></li>
                                    <li><a href="index.html#templates" title="Templates"> TEMPLATES</a></li>
                                    <li><a href="index.html#contacts" title="Contacts" > CONTACTS  </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluide">
                <div className="row">
                    <div id="header-img" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="header-img">
                            <img className="img-responsive" src="Hojmft2FmnM.jpg" alt="header-img" />
                        </div>
                    </div>
                </div>
            </div>

            <a href="index.html#home" title="Up">  <img id="arrow" src="icons/137.png"/>  </a>
        </div> ;
        }
    }

/* <div id="callback">
 <div class="container-fluide">
 <div class="row">
 <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
 <img src="mail.png" id="feedback" title="Feedback"/>
 </div>
 </div>
 </div>
 </div> */