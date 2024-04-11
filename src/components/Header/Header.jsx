import {useState} from "react";
import styles from './Header.module.scss';
import logoHeader from '../../assets/./header/logo-header.png';
import phoneIcon from '../../assets/./header/phone.png';
import kapibara from '../../assets/./header/kapibara.png';

function Header({laboratoryRef, formRef, galleryRef}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleItemClick = index => {
        setActiveIndex(index);
        if (index === 0) {
            laboratoryRef.current.scrollIntoView({
                behavior: 'smooth'
            })
        } else if (index === 1) {
            galleryRef.current.scrollIntoView({
                behavior: 'smooth'
            })
        } else {
            formRef.current.scrollIntoView({
                behavior: 'smooth'
            })
        }
    };

    return (
        <section>
            <div className='container'>
                <header className={styles.header}>
                    <div className={styles.header__logo}>
                        <img src={logoHeader} alt="logo"/>
                        <span>Современные методики диагностики</span>
                    </div>
                    <ul className={styles.list}>
                        <li>
                            <button className={`${styles.list__item} ${activeIndex === 0 ? styles.list__item_active : ''}`}
                                    onClick={() => handleItemClick(0)}
                            >
                                Лаборатория
                            </button>
                        </li>
                        <li>
                            <button className={`${styles.list__item} ${activeIndex === 1 ? styles.list__item_active : ''}`}
                                    onClick={() => handleItemClick(1)
                                    }>
                                Галерея
                            </button>
                        </li>
                        <li>
                            <button className={`${styles.list__item} ${activeIndex === 2 ? styles.list__item_active : ''}`}
                                    onClick={() => handleItemClick(2)}
                            >
                                Оставить заявку
                            </button>
                        </li>
                    </ul>
                    <div className={styles.call}>
                        <a href="tel:+71234567890"><img src={phoneIcon} alt="phone"/></a>
                        <div className={styles.call__phone}>
                            <a className={styles.call__contact} href="tel:+71234567890">+7 123 456 7890</a><br/>
                            <span className={styles.call__free}>Звонок бесплатный</span>
                        </div>
                    </div>
                </header>
            </div>
            <section className={styles.kapibara}>
                <div className="container">
                    <div className={styles.kapibara__inner}>
                        <div className={styles.kapibara__text}>
                            <p className={styles.kapibara__result}>точные результаты</p>
                            <p className={styles.kapibara__deadline}>точно в срок</p>
                        </div>
                        <img className={styles.kapibara__image} src={kapibara} alt="kapibara"/>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Header;