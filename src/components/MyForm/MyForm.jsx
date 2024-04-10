import styles from './MyForm.module.scss';
import done from "../../assets/ui/done.svg";
import MyButton from "../../ui/MyButton/MyButton.jsx";

function MyForm() {
    return (
        <form className={styles.form}>
            <div className={styles.form__inputs}>
                <input className={styles.form__input} type="text" placeholder='Фамилия'/>
                <input className={styles.form__input} type="text" placeholder='Имя'/>
                <input className={styles.form__input} type="text" placeholder='Отчество'/>
            </div>
            <MyButton type={'submit'}>
                <span>Отправить</span>
                <img src={done} alt='done'/>
            </MyButton>
        </form>
    );
}

export default MyForm;