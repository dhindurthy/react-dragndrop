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
          <div
            id="3"
            className="child-box"
            draggable="true"
            onDragStart={this.onDragStart}
            style={{ backgroundColor: "violet" }}
          />
          <div
            id="5"
            className="child-box"
            draggable="true"
            onDragStart={this.onDragStart}
            style={{ backgroundColor: "indigo" }}
          />
          <div
            id="6"
            className="child-box"
            draggable="true"
            onDragStart={this.onDragStart}
            style={{ backgroundColor: "blue" }}
          />
          <div
            id="7"
            className="child-box"
            draggable="true"
            onDragStart={this.onDragStart}
            style={{ backgroundColor: "green" }}
          />
          <div
            id="2"
            className="child-box"
            draggable="true"
            onDragStart={this.onDragStart}
            style={{ backgroundColor: "yellow" }}
          />
          <div
            id="4"
            className="child-box"
            draggable="true"
            onDragStart={this.onDragStart}
            style={{ backgroundColor: "orange" }}
          />
          <div
            id="1"
            className="child-box"
            draggable="true"
            onDragStart={this.onDragStart}
            style={{ backgroundColor: "red" }}
          />
        </Draganddrop>
        {/* <button> >> </button> */}
        {/* <button> << </button> */}
        <Draganddrop
          onDragStart={this.onDragStart}
          onDrop={this.onDrop}
          onDragOver={this.onDragOver}
        />
      </section>
    );
  }
}

export default Draganddropdemo;
