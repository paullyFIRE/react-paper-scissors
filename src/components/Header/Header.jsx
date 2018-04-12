import React from 'react';
import MenuButton from './MenuButton';

class Header extends React.Component {
    render (props) {
        return (
            <div style={style.header}>
                <div>
                    <h1 style={style.title}>{this.props.title}</h1>
                </div>
                <div>
                    <MenuButton style={style.button} text="Leaderboard" linkModal={this.props.modals[1]}/>
                    <MenuButton style={style.button} text="Games" linkModal={this.props.modals[0]}/>
                </div>
            </div>
        );
    }
}

const style = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#333',
        textAlign: 'center'
    },
    title: {
        fontSize: '45px',
        color: 'coral'
    },
    button: {
        margin: '5px 25px 5px 0'
    }
};

export default Header;