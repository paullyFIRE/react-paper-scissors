import React from 'react';
import Layout from './Layout';
import rockSvg from '../images/rock.svg';
import paperSvg from '../images/paper.svg';
import scissorsSvg from '../images/scissors.svg';
import ModalButton from '../components/Buttons/ModalButton';
import ControlButton from '../components/Buttons/ControlButton';
import GameActionButton from '../components/Buttons/GameActionButton';
import { connect } from 'react-redux';

class GameArea extends React.Component {
    constructor(props) {
        super(props)

        this.gameControlButton = this.gameControlButton.bind(this);
    }

    gameControlButton(event) {
        if(!this.props.started) {
            this.props.dispatch.gameStarted();
        }
    }

    render(props) {
        console.log(this.props);
        return (
            <div style={styles.baseStyles}>
                <Layout {...this.props}>
                    <div style={{ margin: '0 auto', width: '80vw', maxWidth: '1100px' }}>

                        <div style={{ display: 'flex', justifyContent: 'space-around',
                                     alignItems: 'center', padding: '1.5em 0 0', maxWidth: '650px', margin: '0 auto' }}>
                            <ControlButton eventHandler={this.gameControlButton}>Reset Game</ControlButton>
                            <ControlButton eventHandler={this.gameControlButton}>Submit Score</ControlButton>
                            <ModalButton linkModal={this.props.modals.rules} className="btn btn-lg">Rules</ModalButton>
                        </div>

                        {this.props.started ? null :
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <h2>Hit a Button to Begin</h2>
                            </div>
                        }

                        <div style={{ border: '1px solid grey', marginTop: '1em'}}>
                            <div style={{ display: 'flex', justifyContent: 'center'}}>
                                <label style={{ paddingTop: '10px', fontSize: '1.5em' }}>
                                    Score: <span style={styles.scoreHighlight}>{this.props.score}</span>
                                </label>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 5vw' }}>
                                <label>Rounds Won: <span style={styles.scoreHighlight}>{this.props.roundsWon}</span></label>
                                <label>Rounds Lost: <span style={styles.scoreHighlight}>{this.props.roundsLost}</span> / 3</label>
                                <label>Multipliers Won: <span style={styles.scoreHighlight}>{this.props.multipliers}</span></label>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '650px', margin: '1.5em auto 1.5em auto'}}>
                            <label className="score-label">Victory Points: <span id="victory-score">0</span></label>
                            <label className="score-label">Player Score: <span id="player-score">0</span></label>
                            <label className="score-label">Computer Score: <span id="cpu-score">0</span></label>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <GameActionButton value="rock" eventHandler={this.gameControlButton} src={rockSvg}></GameActionButton>
                            <GameActionButton value="paper" eventHandler={this.gameControlButton} src={paperSvg}></GameActionButton>
                            <GameActionButton value="scissors" eventHandler={this.gameControlButton} src={scissorsSvg}></GameActionButton>
                        </div>

                        <div id="round-history">
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        started: state.started,
        score: state.score,
        roundsWon: state.roundsWon,
        roundsLost: state.roundsLost,
        multipliers: state.multipliers
    };
};

const mapDispatch = (dispatch) => {
    return {
        dispatch: {
            gameStarted() { dispatch({ type: 'STARTED' }) }
        }
    }
}

const styles = {
    baseStyles: {
        fontSize: '1.5em',
        lineHeight: '1.6em'
    },
    scoreHighlight: {
        color: 'green'
    }
};

export default connect(mapState, mapDispatch)(GameArea);