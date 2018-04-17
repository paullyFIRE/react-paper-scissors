import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import config from '../../config';
import GameControls from '../Game/GameControls';

class MultiplierModal extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Modal modalName={this.props.modal.modalName}>
                <div className="modal-header">
                    <h4 className="modal-title">{this.props.modal.heading}</h4>
                </div>

                <div className="modal-body">
                    DOUBLE UP OR NOTHING

                    <GameControls style={{ width: '100px' }} />
                </div>

                <div className="modal-footer">
                </div>
            </Modal>
        );
    }
}

const mapState = (state) => {
    return {
        modal: config.modals.multiplier
    };
};

export default connect(mapState)(MultiplierModal);