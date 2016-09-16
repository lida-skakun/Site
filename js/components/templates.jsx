import React from 'react';
import {render} from 'react-dom';
import styles from '../../Style/templates.css';

export default class Templates extends React.Component {
    render () {
        return 	<div id="templates">
            <h1>Website Templates</h1>
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                 <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="5"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="6"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="7"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="8"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="9"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="10"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="11"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="11"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src="template/Big/one.png" className="img-responsive" alt="template #1"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/two.png" className="img-responsive" alt="template #2"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/three.png" className="img-responsive" alt="template #3"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/four.png" className="img-responsive"  alt="template #4"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/five.png" className="img-responsive"  alt="template #5"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/six.png" className="img-responsive"  alt="template #6"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/seven.png" className="img-responsive"  alt="template #7"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/eight.png" className="img-responsive"  alt="template #8"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/nine.png" className="img-responsive"  alt="template #9"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/ten.png" className="img-responsive"  alt="template #10"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/eleven.png" className="img-responsive"  alt="template #11"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/twelve.png" className="img-responsive"  alt="template #12"/>
                    </div>
                    <div className="item">
                        <img src="template/Big/thriteen.png" className="img-responsive"  alt="template #13"/>
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"> </span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"> </span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>;
    }
}