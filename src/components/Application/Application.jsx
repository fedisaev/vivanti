import styles from './Application.module.scss';
import Headling from "../../ui/Headling/Headling.jsx";
import MyForm from "../MyForm/MyForm.jsx";

function Application({setModal}) {
    return (
        <section className={styles.wrapper}>
            <div className='container'>
                <div className={styles.application}>
                    <Headling>Заявка на диагностику</Headling>
                    <p className={styles.application__text}>
                        Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные
                        результаты в кратчайшие сроки!
                    </p>
                    <MyForm setModal={setModal}/>
                </div>
            </div>
        </section>
    );
}

export default Application;