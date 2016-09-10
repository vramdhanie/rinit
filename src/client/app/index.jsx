import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render(){
        return <div> Hello React! And watch this. </div>;
    }
}

render(<App/>, document.getElementById('app'));