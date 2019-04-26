import React, { Component } from "react";
import axios from "axios";
export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSal = this.onChangeSal.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      sal: "",
      address: ""
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeSal(e) {
    this.setState({
      sal: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const emp = {
      name: this.state.name,
      sal: this.state.sal,
      address: this.state.address
    };
    axios
      .post("http://localhost:4000/emproute/add", emp)
      .then(res => console.log(res.data));

    this.setState({
      name: "",
      sal: "",
      address: ""
    });
  }
  render() {
    const editMode = this.props.data && this.props.data.length && 'edit' in this.props.data[0]
      ? this.props.data[0].edit : false;
    return (
      <div style={{ marginTop: 50 }}>
        <h3>{editMode ? "Update Employee" : "Add New Employee"}</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Emp Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Emp Salary: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sal}
              onChange={this.onChangeSal}
            />
          </div>
          <div className="form-group">
            <label>Emp Address: </label>
            <input type="text"
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Employee"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
