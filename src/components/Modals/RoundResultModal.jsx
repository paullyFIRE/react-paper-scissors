import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import config from '../../config';
import GameControls from '../Game/GameControls';

import rockSvg from '../../images/rock.svg';
import paperSvg from '../../images/paper.svg';
import scissorsSvg from '../../images/scissors.svg';

class RoundResultModal extends React.Component {
    constructor() {
        super()

    }

    componentDidMount() {
        let options = [rockSvg, paperSvg, scissorsSvg]

        setTimeout(() => {
            for(let a = 0; a < 3; a++){

                if(a == 2) {
                    $("#player-hand").animate({marginBottom: '+=140', marginLeft: '+=5'}, 340 + Math.floor(Math.random() * 40), function() {
                        $("#player-hand").attr("src", options[Math.floor(Math.random() * 3)]);
                    });
                    $("#computer-hand").animate({marginBottom: '+=140', marginLeft: '+=5'}, 340 + Math.floor(Math.random() * 40), function() {
                        $("#computer-hand").attr("src", options[Math.floor(Math.random() * 3)]);
                    });
                } else {
                    $("#player-hand").animate({marginBottom: '+=140', marginLeft: '+=5'}, 380);
                    $("#computer-hand").animate({marginBottom: '+=140', marginLeft: '+=5'}, 380);
                }
    
                $("#computer-hand").animate({marginBottom: '-=140', marginLeft: '-=5'}, 120);
                $("#player-hand").animate({marginBottom: '-=140', marginLeft: '-=5'}, 120);
            }
        }, 500);
    }

    render() {
        return (
            <Modal modalName={this.props.modal.modalName}>
                <div className="modal-body">
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '600px'}}>
                    <div id='player-control'>
                        <img style={{ position: 'relative', transform: 'rotate(75deg)', width: '200px'}} id='player-hand' src={rockSvg} />
                    </div>
                    <div id='computer-control'>
                        <img style={{ position: 'relative', transform: 'rotate(285deg) scaleX(-1)', width: '200px'}} id='computer-hand' src={rockSvg} />
                    </div>
                </div>
            </div>
            </Modal>
        );
    }
}

const mapState = (state) => {
    return {
        modal: config.modals.roundResult
    };
};

export default connect(mapState)(RoundResultModal);