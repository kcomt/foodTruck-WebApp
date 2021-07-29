import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import "./tabsyx.css";
import DetallePrincipal from "../detallePrincipal/detallePrincipal";
import Menu from "../menu/menu";
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
        <div class="tab-div-parent">
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Ubicación">
              <div class="tab-div-child">
                <DetallePrincipal
                  carrito={this.props.location.megastate.carrito}
                ></DetallePrincipal>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Menu">
              <div class="tab-div-child">
                <Menu carrito={this.props.location.megastate.carrito}> </Menu>
              </div>
            </Tab>
          </Tabs>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Tabsyx);
