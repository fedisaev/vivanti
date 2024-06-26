import styles from './Laboratory.module.scss';
import arrow from "../../assets/ui/arrow.svg";
import imageLaboratory from "../../assets/laboratory/image-laboratory.png";
import Headling from "../../ui/Headling/Headling.jsx";
import MyButton from "../../ui/MyButton/MyButton.jsx";
import {forwardRef} from "react";

const Laboratory = forwardRef(function Laboratory({formRef}, ref) {

    const handleForm = () => {
        formRef.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <section className={styles.laboratory}>
            <div className="container">
                <main ref={ref} className={styles.laboratory__main}>
                    <Headling>Лаборатория</Headling>
                    <img className={styles.laboratory__image}
                         src={imageLaboratory}
                         alt="kapibara in laboratory"
                    />
                    <div className={styles.laboratory__paragraph}>
                        <p className={styles.laboratory__text}>
                            Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными
                            капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, микробиологических
                            исследованиях, генетической диагностике и многом другом.
                        </p>
                        <p className={styles.laboratory__text}>
                            Мы используем современное оборудование и методики и гарантируем точность и надежность
                            результатов.
                        </p>
                    </div>
                    <MyButton type={'button'} onClick={handleForm}>
                        <span>Оставить заявку</span>
                        <img src={arrow} alt="go to application"/>
                    </MyButton>
                </main>
            </div>
        </section>
    );
})

export default Laboratory;
