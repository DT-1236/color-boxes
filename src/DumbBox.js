import React from 'react';
import './Box.css';

class DumbBox extends React.Component {
  render() {
    const colorStyle = { backgroundColor: this.props.color };
    return <div className="box" style={colorStyle} />;
  }
}

export default DumbBox;
