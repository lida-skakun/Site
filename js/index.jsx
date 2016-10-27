import React from 'react';
import {render} from 'react-dom';
import Home from './components/home';
import About from './components/about';
import Faq from './components/faq';
import Templates from './components/templates';
import Contacts from './components/contacts';

class App extends React.Component {
    render () {
        return <div>
            <Home/>
            <About/>
            <Faq/>
            <Templates/>
            <Contacts/>
        </div>;
    }
}

render(<App/>, document.getElementById('app'));