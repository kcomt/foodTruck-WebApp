import React, { Component } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import "./carritos.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import { withRouter } from "react-router-dom";

class Carritos extends Component {
  state = {
    carritos: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/foodTrucks")
      .then((res) => {
        console.log(res.data);
        this.setState({
          carritos: Object.values(res.data),
        });
        console.log(this.state.carritos[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  imageFormatter(cell, row) {
    return <img class="imgTable" src={"" + cell + ""} alt=" " />;
  }

  moneyFormatter(cell, row) {
    return <b>S/. {" " + cell + ""}</b>;
  }

  columns = [
    {
      dataField: "id",
      text: "#",
    },
    {
      dataField: "url",
      text: "",
      formatter: this.imageFormatter,
    },
    {
      dataField: "name",
      text: "Nombre",
    },
    {
      dataField: "foodType",
      text: "Tipo",
    },
    {
      dataField: "cost",
      text: "Precio Promedio",
      formatter: this.moneyFormatter,
    },
  ];

  redirect(rowIndex) {
    console.log(4);
    this.props.history.push({
      pathname: "/detalle",
      megastate: { carrito: this.state.carritos[rowIndex] },
    });
  }

  render() {
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        this.redirect(rowIndex);
      },
    };
    return (
      <React.Fragment>
        <div class="tableDiv">
          <BootstrapTable
            keyField="id"
            data={this.state.carritos}
            columns={this.columns}
            pagination={paginationFactory({
              sizePerPage: 4,
              hideSizePerPage: true,
            })}
            rowEvents={rowEvents}
            hover={true}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Carritos);
