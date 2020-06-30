import React from 'react'
import ReactDOM from 'react-dom'

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit (event) {
  //alert('A list was submitted: ' + this.state.formvalue);
  event.preventDefault();
  fetch('your post url here', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: this.state.id,
      item: this.state.item,
      itemType: this.state.itemType
    })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err);
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default UserInput
