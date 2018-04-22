import React from 'react';
import PropTypes from 'prop-types';

class ModalButton extends React.Component {
  render(props) {
    return (
      <button className="btn btn-lg" type="button" data-toggle="modal" data-target={`#${this.props.linkModal.modalName}`}>
        {this.props.linkModal.heading}
      </button>
    );
  }
}

ModalButton.propTypes = {
  linkModal: PropTypes.object,
  style: PropTypes.string
};

export default ModalButton;
