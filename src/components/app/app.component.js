import React, { Component } from "react";
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import "./app.component.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="root-container">
          <h1> Hello, React Set-up!! </h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;