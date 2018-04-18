import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import config from '../../config';
import GameControls from '../Game/GameControls';

import rockSvg from '../../images/rock.svg';
import paperSvg from '../../images/paper.svg';
import scissorsSvg from '../../images/scissors.svg';

class DuelResultModal extends React.Component {
    animate() {
        const images = {
            "rock": rockSvg,
            "paper": paperSvg,
            "scissors": scissorsSvg
        };

        const playerOption = this.props.duelState.player;
        const computerOption = this.props.duelState.computer;

        setTimeout(() => {
            for(let a = 0; a < 3; a++){
                if(a == 2) {
                    $("#player-hand").animate({marginBottom: '+=140', marginLeft: '+=5'}, 340 + Math.floor(Math.random() * 40), function() {
                        $("#player-hand").attr("src", images[playerOption]);
                        $('.duelModalTitle h2').css("display", "block");
                    });
                    $("#computer-hand").animate({marginBottom: '+=140', marginLeft: '+=5'}, 340 + Math.floor(Math.random() * 40), function() {
                        $("#computer-hand").attr("src", images[computerOption]);
                    });
                } else {
                    $("#player-hand").animate({marginBottom: '+=140', marginLeft: '+=5'}, 380);
                    $("#computer-hand").animate({marginBottom: '+=140', marginLeft: '+=5'}, 380);
                }
    
                $("#computer-hand").animate({marginBottom: '-=140', marginLeft: '-=5'}, 120);
                $("#player-hand").animate({marginBottom: '-=140', marginLeft: '-=5'}, 120);
            }

            //Inverval checking for animation finish
            let animationFinishCheck = setInterval(() => {
                if( !$(`#player-hand`).is(':animated') ) {
                    clearInterval(animationFinishCheck);
                    this.props.animationCompleted();

                    setTimeout(() => {
                        $(`#${this.props.modal.modalName}`).modal("hide");
                        $('.modal-backdrop.in').css('opacity', '0.1');
                        this.resetComponent();
                    }, this.props.modal.closeDelay);
                }
            }, 200)
        }, this.props.modal.initialDelay);
    }

    resetComponent() {
        $("#player-hand").attr("src", rockSvg);
        $("#computer-hand").attr("src", rockSvg);
        $('.duelModalTitle h2').css("display", "none");
    }

    componentDidMount() {
        $(`#${this.props.modal.modalName}`).on('shown.bs.modal', (event) => {
            this.animate();
        });
    }

    render() {
        

        return (
            <Modal modalName={this.props.modal.modalName}>
                <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', height: '300px'}}>

                <div className="duelModalTitle" style={{ display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', height: '200' }}>
                    <h2 style={{ display: 'none' }}>You <strong style={{ color: 'green' }}>{this.props.duelState ? this.props.duelState.result : ""}</strong>!</h2>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '200px'}}>
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
        modal: config.modals.duelResult,
        duelState: state.duelResultQueue.queue[0] || null
    };
};

const mapDispatch = (dispatch) => {
    return {
        animationCompleted() { dispatch({ type: 'DUEL_ANIMATION_COMPLETED'})}
    }
}

export default connect(mapState, mapDispatch)(DuelResultModal);