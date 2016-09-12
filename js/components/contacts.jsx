import React from 'react';
import {render} from 'react-dom';

export default class Contacts extends React.Component {
    render () {
        return 	<div id="contacts">
                    <h1>How you can find us</h1>
                    <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1FGgduyteUSDMjox1YljQvNnAhPk"></iframe>
                    <div id="address">
                        <h2> Our location</h2>
                        <p>Kiev, Ukraine <br/>
                            Eastern Europe <br/>
                            cell: +38 (093) 914 - 26 - 46 <br/>
                            e-mail: kunska@gmail.com</p>
                    </div>
                    <footer>
                        Made in Ukraine <br/>
                        kunska@gmail.com <br/>
                        2016
                    </footer>
                </div>;
    }
}