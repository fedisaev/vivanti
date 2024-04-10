import styles from './Laboratory.module.scss';
import arrow from "../../assets/arrow.svg";
import imageLaboratory from "../../assets/image-laboratory.png";
import Headling from "../../ui/Headling/Headling.jsx";
import MyButton from "../../ui/MyButton/MyButton.jsx";

function Laboratory() {
    return (
        <section className={styles.laboratory}>
            <div className="container">
                <div className={styles.laboratory__main}>
                    <Headling>Лаборатория</Headling>
                    <p className={styles.laboratory__text}>Наша лаборатория предлагает широкий спектр медицинских
                        исследований, проводимых опытными
                        капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, микробиологических
                        исследованиях, генетической диагностике и многом другом.
                    </p>
                    <p className={styles.laboratory__text}>Мы используем современное оборудование и методики и
                        гарантируем
                        точность и надежность
                        результатов.
                    </p>
                    <MyButton type={'button'}>Оставить заявку <img src={arrow} alt="arrow"/></MyButton>
                </div>
                <div>
                    <img src={imageLaboratory} alt="image-laboratory"/>
                </div>
            </div>
        </section>
    );
}

export default Laboratory;
