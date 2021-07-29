import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  imageFormatter(cell, row) {
    return <img class="imgTable3" src={"" + cell + ""} alt=" " />;
  }

  moneyFormatter(cell, row) {
    return <b>S/. {" " + cell + ""}</b>;
  }

  columns = [
    {
      dataField: "url",
      text: "",
      formatter: this.imageFormatter,
    },
    {
      dataField: "nombre",
      text: "Nombre",
    },
    {
      dataField: "precio",
      text: "Precio Promedio",
      formatter: this.moneyFormatter,
    },
    {
      dataField: "descripcion",
      text: "Tipo",
    },
  ];

  menuItems = [
    {
      nombre: "Burrito Simple",
      precio: "12",
      url: "https://i.pinimg.com/originals/33/3a/2d/333a2dbd5b5d126774403fbdc999e7fd.jpg",
      descripcion:
        "Un burrito simple hecho con frejoles, arroz, pico de gallo y carne",
    },
    {
      nombre: "Burrito con pollo y queso",
      precio: "14",
      url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2008%2F10%2F01%2Fchicken-burritto-ay-1892167-x.jpg",
      descripcion:
        "Un burrito hecho con frejoles, arroz, pico de gallo, pollo y eleccion de queso",
    },
    {
      nombre: "Burrito con pollo y carne",
      precio: "13",
      url: "https://dinnerthendessert.com/wp-content/uploads/2018/08/Beef-Burrito.jpg",
      descripcion:
        "Un burrito hecho con frejoles, arroz, pico de gallo, carne y eleccion de queso",
    },
    {
      nombre: "Nachos con queso",
      precio: "7",
      url: "https://okdiario.com/img/2018/02/27/nachos-con-queso-655x368.jpg",
      descripcion: "Plato de nachos con queso",
    },
  ];

  menuItems2 = [
    {
      nombre: "Ramen",
      precio: "12",
      url: "https://www.recetasderechupete.com/wp-content/uploads/2017/11/Ramen-48.jpg?width=1200&enable=upscale",
      descripcion: "Ramen",
    },
    {
      nombre: "Ramen2",
      precio: "14",
      url: "https://cdn.kiwilimon.com/recetaimagen/36172/th5-640x426-44466.jpg",
      descripcion: "Ramen2",
    },
    {
      nombre: "Ramen3",
      precio: "13",
      url: "https://ramenrecetas.com/img/ramen-con-naruto-486.jpg",
      descripcion: "Ramen3",
    },
  ];

  render() {
    return (
      <React.Fragment>
        <div>
          {(() => {
            if (this.props.carrito.id == 3) {
              return (
                <div class="tableDiv-2">
                  <BootstrapTable
                    keyField="id"
                    data={this.menuItems}
                    columns={this.columns}
                    hover={true}
                  />
                </div>
              );
            } else if (this.props.carrito.id == 2) {
              return (
                <div class="tableDiv-2">
                  <BootstrapTable
                    keyField="id"
                    data={this.menuItems2}
                    columns={this.columns}
                    hover={true}
                  />
                </div>
              );
            } else {
              return (
                <div>
                  <h1>Falta de data</h1>
                </div>
              );
            }
          })()}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Menu);
