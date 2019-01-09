import React from 'react';
import Box from './Box';

class Boxes extends React.Component {
  static defaultProps = {
    boxes: 16
  };

  render() {
    const empty = Array.from({ length: this.props.boxes });
    const boxes = empty.map(box => <Box />);
    return <div>{boxes}</div>;
  }
}

export default Boxes;
