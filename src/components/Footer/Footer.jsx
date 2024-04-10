import styles from './Footer.module.scss';
import logoFooter from "../../assets/footer/logo-footer.png";

function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className="container">
                <div className={styles.footer}>
                    <div className={styles.footer__text}>
                        Все права защищены Российской Ассоциацией Капибар
                    </div>
                    <img className={styles.footer__logo}
                         src={logoFooter}
                         alt="logo"
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;