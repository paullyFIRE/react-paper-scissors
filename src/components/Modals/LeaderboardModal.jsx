import React from 'react';
import Modal from './Modal';

class LeaderboardModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <Modal modalName={this.props.modalName}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{this.props.heading}</h4>
                    <p>{this.props.description}</p>
                </div>

                <div className="modal-body">
                    <p>Some text in the modal.</p>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </Modal>
        );
    }
}

export default LeaderboardModal;