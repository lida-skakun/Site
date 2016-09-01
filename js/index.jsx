import React from 'react';
import {render} from 'react-dom';
import Contacts from './components/contacts';

class App extends React.Component {
    render () {
        return <div>
            <Contacts/>
        </div>;
    }
}

render(<App/>, document.getElementById('app'));