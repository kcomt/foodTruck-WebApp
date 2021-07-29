import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./detallePrincipal.css";
import Mapa from "../mapa/mapa";

class DetallePrincipal extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("THIS");
    console.log(this.props.carrito);
  }

  render() {
    return (
      <React.Fragment>
        <div class="detalle">
          <div class="detalle-column-1">
            <div class="top">
              <h1>{this.props.carrito.name}</h1>
              <img class="imgDetalle" src={this.props.carrito.url} />
            </div>
            <div class="mid">
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </div>

            <div class="bot">
              <div class="bot-row">
                <b>Costo Promedio: </b>
                <p>S/.{this.props.carrito.cost}</p>
              </div>
              <div class="bot-row">
                <b>Tipo de Comida: </b>
                <p>S/.{this.props.carrito.foodType}</p>
              </div>
              <div class="bot-row">
                <b>Contacto: </b>
                <p>S/.{this.props.carrito.phoneNumber}</p>
              </div>
            </div>
          </div>

          <div class="detalle-column-1">
            <Mapa></Mapa>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(DetallePrincipal);
