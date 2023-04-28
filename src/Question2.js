import React, { Component } from "react";

class AddItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      const { name, description, price } = this.props.item;
      this.setState({ name, description, price });
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitHandler = (newItem) => {
    console.log("Submitting item:", newItem);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description, price } = this.state;
    const newItem = { name, description, price };
    this.submitHandler(newItem);
    this.setState({ name: "", description: "", price: "" });
  };

  render() {
    const { name, description, price } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default AddItemForm;
