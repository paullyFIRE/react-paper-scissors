import React from 'react';
import PropTypes from 'prop-types';

class ControlButton extends React.Component {
  render(props) {
    return (
      <button className="btn btn-lg" type="button" value={this.props.value} onClick={this.props.eventHandler}>
        {this.props.children}
      </button>
    );
  }
}

ControlButton.propTypes = {
  value: PropTypes.string,
  eventHandler: PropTypes.func,
  children: PropTypes.string
};

export default ControlButton;
