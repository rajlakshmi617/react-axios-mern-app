import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
export default class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { emps: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/emproute")
      .then(response => {
        this.setState({ emps: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.emps.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Salary</td>
              <td>Address</td>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
