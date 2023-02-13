import React, { Component } from 'react';
import UploadFileContainer from '../containers/UploadFileContainer';
class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <UploadFileContainer></UploadFileContainer>
            </div>
        );
    }
}

export default HomePage;
