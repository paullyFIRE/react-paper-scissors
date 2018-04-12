import React from 'react';

class Modal extends React.Component {
    render(props) {
        return (
            <div id={this.props.modalName} className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;