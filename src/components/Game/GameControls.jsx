import React from 'react';
import GameActionButton from '../Buttons/GameActionButton';
import rockSvg from '../../images/rock.svg';
import paperSvg from '../../images/paper.svg';
import scissorsSvg from '../../images/scissors.svg';

class GameHeaderControls extends React.Component {
    render(props) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <GameActionButton style={this.props.style} value="rock" eventHandler={this.props.eventHandler} src={rockSvg}></GameActionButton>
                <GameActionButton style={this.props.style} value="paper" eventHandler={this.props.eventHandler} src={paperSvg}></GameActionButton>
                <GameActionButton style={this.props.style} value="scissors" eventHandler={this.props.eventHandler} src={scissorsSvg}></GameActionButton>
            </div>
        );
    }
};

export default GameHeaderControls;