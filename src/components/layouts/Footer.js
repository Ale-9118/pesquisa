import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer(){

    return (
        
    <footer className={styles.foot}>
        <ul className={styles.listaGeral}>
            <li className={styles.listaGeral}>
                <FaFacebook/>
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
        </ul>
        <div className={styles.paragrafo}>
        <p><span>Alamedas</span> &copy; 2023</p>
        </div>
    </footer>
   
    
    );
}
export default Footer;