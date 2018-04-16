import React from 'react';
import ModalButton from './Buttons/ModalButton';
import LinkButton from './Buttons/LinkButton';
import { Link } from 'react-router-dom';
import config from '../config';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render (props) {
        return (
            <div style={style.header}>
                <div>
                    <Link to='/'>
                        <h1 style={style.title}>{config.title}</h1>
                    </Link>
                </div>
                <div style={{ display: 'flex' }}>
                    <ModalButton style={style.button} linkModal={config.modals.leaderboard}/>
                    <ModalButton style={style.button} linkModal={config.modals.games}/>
                    <Link to={location.pathname == '/' ? '/about' : '/'}>
                        <LinkButton style={style.button}>{location.pathname == '/' ? 'About' : 'Home'}</LinkButton>
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
        backgroundColor: '#2980b9',
        textAlign: 'center'
    },
    title: {
        fontSize: '45px',
        color: 'white'
    },
    button: {
        margin: '5px 25px 5px 0'
    }
};

export default Header;