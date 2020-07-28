import React from 'react'
import Logo from '../../asserts/img/ufoflix.png'
import './menu.css'
import Button from '../Button'
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="UfoFlix Logo" />
            </a>

            <Button as="a" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;