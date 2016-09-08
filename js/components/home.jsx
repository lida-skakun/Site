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
                            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal"> <img id="feedback" src="social_balloon-37.png"/> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Cencel</span></button>
                            <h4 className="modal-title" id="myModalLabel">Feedback</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPhone" className="col-sm-2 control-label">Phone</label>
                                    <div className="col-sm-10">
                                        <input type="phone" className="form-control" id="inputPhone" placeholder="Phone"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cencel</button>
                            <button type="button" className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <a href="index.html#home" title="Up">  <img id="arrow" src="icons/137.png"/>  </a>
        </div> ;
        }
    }

