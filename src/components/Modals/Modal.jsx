import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render(props) {
    return (
      <div id={this.props.modalName} className="modal fade" role="dialog">
        <div className={`modal-dialog ${this.props.dialogStyle}`}>
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalName: PropTypes.string,
  dialogStyle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Modal;
