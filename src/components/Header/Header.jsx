import React from 'react';
import MenuButton from './MenuButton';
// import GamesModal from '../Modals/GamesModal';

class Header extends React.Component {
    render (props) {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MenuButton text="Leaderboard" modalName={this.props.modalLinks[1]}/>
                <MenuButton text="Games" modalName={this.props.modalLinks[0]}/>
            </div>
        );
    }
}

export default Header;