import React from "react";
import Draganddrop from "./draganddrop";

class Draganddropdemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
  }
  onDragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
  }
  onDrop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");

    e.target.appendChild(document.getElementById(data));
  }
  onDragOver(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }
  render() {
    return (
      <section>
        <Draganddrop
          onDragStart={this.onDragStart}
          onDrop={this.onDrop}
          onDragOver={this.onDragOver}
        >
          <ul>
            <li
              tabIndex="0"
              id="3"
              className="child-box"
              draggable="true"
              onDragStart={this.onDragStart}
              style={{ backgroundColor: "violet" }}
            />
            <li
              tabIndex="0"
              id="5"
              className="child-box"
              draggable="true"
              onDragStart={this.onDragStart}
              style={{ backgroundColor: "indigo" }}
            />
            <li
              tabIndex="0"
              id="6"
              className="child-box"
              draggable="true"
              onDragStart={this.onDragStart}
              style={{ backgroundColor: "blue" }}
            />
            <li
              tabIndex="0"
              id="7"
              className="child-box"
              draggable="true"
              onDragStart={this.onDragStart}
              style={{ backgroundColor: "green" }}
            />
            <li
              tabIndex="0"
              id="2"
              className="child-box"
              draggable="true"
              onDragStart={this.onDragStart}
              style={{ backgroundColor: "yellow" }}
            />
            <li
              tabIndex="0"
              id="4"
              className="child-box"
              draggable="true"
              onDragStart={this.onDragStart}
              style={{ backgroundColor: "orange" }}
            >
              {" "}
            </li>
            <li
              tabIndex="0"
              id="1"
              className="child-box"
              draggable="true"
              onDragStart={this.onDragStart}
              style={{ backgroundColor: "red" }}
            />
          </ul>
        </Draganddrop>
        {/* <button> >> </button> */}
        {/* <button> << </button> */}
        <Draganddrop
          onDragStart={this.onDragStart}
          onDrop={this.onDrop}
          onDragOver={this.onDragOver}
        >
          <ul />
        </Draganddrop>
      </section>
    );
  }
}

export default Draganddropdemo;
