import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../asserts/img/ufoflix.png'
import Button from '../Button'
import './menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="UfoFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;