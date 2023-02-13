import React, { Component } from 'react';
import Routes from './routes';

class App extends Component {
    render() {
        return (
            <div className="App" style={{ padding: '20px' }}>
                <Routes />
            </div>
        );
    }
}

export default App;
