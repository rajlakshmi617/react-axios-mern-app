import React, { Component } from "react";
import axios from "axios";
export default class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sal: '',
      address: ''
    }
    console.log(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSal = this.onChangeSal.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:4000/emproute/${this.props.match.params.id}`)
      .then(response => {
        console.log('____>', response.data);
        this.setState({
          name: response.data.name,
          sal: response.data.sal,
          address: response.data.address
        })
        console.log('____>', this.state);
      }).catch(function (error) {
        console.log(error);
      })
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
    const obj = {
      name: this.state.name,
      sal: this.state.sal,
      address: this.state.address
    };
    console.log(obj);
    axios.post('http://localhost:4000/emproute/update/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));
    this.props.history.push('/');
  }
  render() {
    return (<div>
      <h3 align="center">Update Employee</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Emp Name: </label>
          <input type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.onChangeName}
          />
        </div>
        <div className="form-group">
          <label>Emp Sal: </label>
          <input type="text"
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
          <input type="submit"
            className="btn btn-primary"
            value="Update Employee"
          />
        </div>
      </form>
    </div>)
  }
}