import styles from './Footer.module.scss';
import logoFooter from "../../assets/logo-footer.png";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <span className={styles.footer__text}>Все права защищены Российской Ассоциацией Капибар</span>
                <img src={logoFooter} alt="logo"/>
            </div>
        </footer>
    );
}

export default Footer;