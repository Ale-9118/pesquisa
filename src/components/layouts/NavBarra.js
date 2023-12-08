import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './NavBarra.module.css'

function NavBarra(){

    return(

    <nav className={styles.navbarra}>
        <Container>
            <div className={styles.titulo}>
            <h1>Pesquisa da Sorte</h1>
            </div>
            <ul className={styles.lista}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/Cadastro">Cadastro</Link></li>
            </ul>
        </Container>   
    </nav>
    );
}
export default NavBarra;