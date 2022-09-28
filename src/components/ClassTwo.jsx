import React, { Component } from "react";

class feedback extends Component {
  constructor(props) {
    super(props);

    this.displayData = [];

    this.state = {
      showData: this.displayData,
      Name: "",
      Department: "",
      Rating: "",
    };
    this.appendData = this.appendData.bind(this);
    this.setName = this.setName.bind(this);
    this.setDepartment = this.setDepartment.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  appendData() {
    this.displayData.push(
      <div className="add-text">
        Name: {this.state.Name} | Department: {this.state.Department} | Rating:{" "}
        {this.state.Rating}
      </div>
    );

    this.setState({
      showData: this.displayData,
      NameOfThePerson: "",
      Department: "",
      rating: "",
    });
  }

  setName(s) {
    let getName = s.target.value;
    this.setState({
      name: getName,
    });
  }

  setDepartment(s) {
    let getDepartment = s.target.value;
    this.setState({
      department: getDepartment,
    });
  }

  setRating(s) {
    let getRating = s.target.value;
    this.setState({
      rating: getRating,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div id="box">
        <h2 className="head">FEEDBACK FORM</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>Name:{" "}
            <input type="text"   value={this.state.Name}  onChange={this.setName} />
          </label>
          <label>
            Department:{" "}
            <input type="text" value={this.state.Department} onChange={this.setDepartment} />
          </label>
          <label>
            Ratings:{" "}
            <input type="text" value={this.state.Rating} onChange={this.setRating} />
          </label>
          <input type="submit" value="Submit" onClick={this.appendData} />
        </form>
<div id="text">{this.displayData}</div>
      </div>
    );
  }
}

export default feedback;