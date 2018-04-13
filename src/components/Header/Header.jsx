import React from 'react';
import ModalButton from './ModalButton';
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render (props) {
        return (
            <div style={style.header}>
                <div>
                    <Link to='/'>
                        <h1 style={style.title}>{this.props.title}</h1>
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <LinkButton style={style.button}>Home</LinkButton>
                    </Link>
                    <ModalButton style={style.button} linkModal={this.props.modals.leaderboard}/>
                    <ModalButton style={style.button} linkModal={this.props.modals.games}/>
                    <Link to='/about'>
                        <LinkButton style={style.button}>About</LinkButton>
                    </Link>
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