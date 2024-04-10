import styles from './MyForm.module.scss';
import done from "../../assets/done.svg";
import MyButton from "../../ui/MyButton/MyButton.jsx";

function MyForm() {
    return (
        <form className={styles.form}>
            <div className={styles.form__inputs}>
                <input className={styles.form__input} type="text" placeholder='Фамилия'/>
                <input className={styles.form__input} type="text" placeholder='Имя'/>
                <input className={styles.form__input} type="text" placeholder='Отчество'/>
            </div>
            <MyButton type={'submit'}>Отправить <img src={done} alt="done"/></MyButton>
        </form>
    );
}

export default MyForm;