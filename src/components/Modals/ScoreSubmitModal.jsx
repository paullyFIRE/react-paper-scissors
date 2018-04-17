import React from 'react';
import Modal from './Modal';
import config from '../../config';

class ScoreSubmitModal extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Modal modalName={config.modals.scoreSubmit.modalName}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{config.modals.scoreSubmit.heading}</h4>
                </div>

                <div className="modal-body">
                    <form>
                        <label>Username:</label> <input name="username" text="text" />
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </Modal>
        );
    }
}

export default ScoreSubmitModal;