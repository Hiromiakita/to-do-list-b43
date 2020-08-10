import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand text-white" href="h">Lista de Tareas</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-white bg-primary" activeClassName="text-secondary" href="a">Agregar Tarea +</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
