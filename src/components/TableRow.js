import React, { Component } from "react";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get('http://localhost:4000/emproute/delete/' + this.props.obj._id)
      .then(response => {
        console.log('....', response);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj._id}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.sal}</td>
        <td>{this.props.obj.address}</td>
        <td><Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link></td>
        <td><button onClick={this.delete} className="btn btn-danger">Delete</button></td>
      </tr>
    );
  }
}

export default TableRow;
