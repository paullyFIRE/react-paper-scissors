import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import config from '../../config';

class GamesModal extends React.Component {
  render() {
    return (
      <Modal modalName={this.props.modal.modalName}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
          <h4 className="modal-title">{this.props.modal.heading}</h4>
        </div>

        <div className="modal-body">Are you sure you want to do this?</div>

        <div className="modal-footer">
          <button
            onClick={() => {
              this.props.confirm();
            }}
            type="button"
            className="btn btn-success"
            data-dismiss="modal"
          >
            Confirm
          </button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            Cancel
          </button>
        </div>
      </Modal>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    confirm() {
      dispatch({ type: 'RESET_GAME' });
    }
  };
};

const mapState = state => {
  return {
    modal: config.modals.confirmModal
  };
};

export default connect(mapState, mapDispatch)(GamesModal);
