import React, { Component } from "react";

class Event extends Component {

  render() {
      const { event } = this.props;
      console.log(event);
    return (
      <div>
        <ul>
          <li>{event.location}</li>
        </ul>
      </div>
    );
  }
}
export default Event;