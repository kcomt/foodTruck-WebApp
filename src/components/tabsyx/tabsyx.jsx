import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import "./tabsyx.css";

class Tabsyx extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.location.megastate);
  }

  render() {
    return (
      <React.Fragment>
        <div class="tab-div">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              <h1> HELLO2</h1>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <h1> HELLO1 </h1>
            </Tab>
          </Tabs>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Tabsyx);
