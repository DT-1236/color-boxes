import React from 'react';
import './Box.css';

function getRandomColor() {
  let hexes = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexes[Math.floor(Math.random() * 16)];
  }

  return color;
}

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: getRandomColor()
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({ color: getRandomColor() });
  }

  render() {
    const colorStyle = { backgroundColor: this.state.color };
    return (
      <div className="box" onClick={this.changeColor} style={colorStyle} />
    );
  }
}

export default Box;
export { getRandomColor };
