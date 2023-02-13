import React, { Component } from 'react';
import ItemPageContainer from "../containers/index";
class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
           <h1>Trang chủ</h1>
          <ItemPageContainer />
      </div>
    );
  }
}

export default HomePage;
