import React from 'react';
import {render} from 'react-dom';

export default class Contacts extends React.Component {
    render () {
        return 	<div id="contacts">
            <h1>How you can find us</h1>

            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.  </p>

            <footer>
                Made in Ukraine<br/>
                kunska@gmail.com<br/>
                2015
            </footer>
        </div>;
    }
}