import React from 'react';
import DumbBox from './DumbBox';

function getRandomColor() {
  let hexes = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexes[Math.floor(Math.random() * 16)];
  }

  return color;
}

class SmartBoxes extends React.Component {
  static defaultProps = {
    boxes: 16
  };

  constructor(props) {
    super(props);
    const colors = {};
    for (let i = 0; i < this.props.boxes; i++) {
      colors[i] = getRandomColor();
    }
    this.state = colors;
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(id) {
    const { ...colors } = this.state;
    colors[id] = getRandomColor();
    this.setState(colors);
  }

  render() {
    const boxes = [];
    for (const id in this.state) {
      // const colorBind = this.changeColor.bind(this, id);
      boxes.push(
        <div onClick={() => this.changeColor(id)}>
          <DumbBox color={this.state[id]} />
        </div>
      );
    }
    return <div>{boxes}</div>;
  }
}

export default SmartBoxes;
