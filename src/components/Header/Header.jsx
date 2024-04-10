import {useState} from "react";
import styles from './Header.module.scss';
import logoHeader from '../../assets/Header/logo-header.png';
import phoneIcon from '../../assets/Header/phone.png';
import kapibara from '../../assets/Header/kapibara.png';

function Header() {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleItemClick = index => setActiveIndex(index);

    return (
        <div className={styles.wrapper}>
            <header className={`container ${styles.header}`}>
                <div className={styles.header__logo}>
                    <img src={logoHeader} alt="logo"/>
                    <span>Современные методики<br/>диагностики</span>
                </div>
                <ul className={styles.list}>
                    <a href="#"
                       className={`${styles.list__item} ${activeIndex === 0 ? styles.list__item_active : ''}`}
                       onClick={() => handleItemClick(0)}
                    >
                        <li>Лаборатория</li>
                    </a>
                    <a href="#"
                       className={`${styles.list__item} ${activeIndex === 1 ? styles.list__item_active : ''}`}
                       onClick={() => handleItemClick(1)
                       }>
                        <li>Галерея</li>
                    </a>
                    <a href="#"
                       className={`${styles.list__item} ${activeIndex === 2 ? styles.list__item_active : ''}`}
                       onClick={() => handleItemClick(2)}
                    >
                        <li>Оставить заявку</li>
                    </a>
                </ul>
                <div className={styles.call}>
                    <img src={phoneIcon} alt="phone"/>
                    <div className={styles.call__phone}>
                        <span className={styles.call__contact}>+7 123 456 7890</span><br/>
                        <span className={styles.call__free}>Звонок бесплатный</span>
                    </div>
                </div>
            </header>
            <section className={styles.kapibara}>
                <div className="container">
                    <div className={styles.kapibara__text}>
                        <span className={styles.kapibara__result}>точные результаты</span>
                        <span className={styles.kapibara__deadline}>точно в срок</span>
                    </div>
                    <div className={styles.kapibara__image}>
                        <img src={kapibara} alt="kapibara"/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;