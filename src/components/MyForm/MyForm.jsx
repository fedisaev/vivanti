import styles from './MyForm.module.scss';
import done from "../../assets/ui/done.svg";
import MyButton from "../../ui/MyButton/MyButton.jsx";

function MyForm({setModal}) {
    const handleModal = e => {
        e.preventDefault();
        setModal(true);
    }
    return (
        <form className={styles.form}>
            <div className={styles.form__inputs}>
                <input required className={styles.form__input} type="text" placeholder='Фамилия'/>
                <input required className={styles.form__input} type="text" placeholder='Имя'/>
                <input required className={styles.form__input} type="text" placeholder='Отчество'/>
            </div>
            <MyButton type={'submit'} onClick={handleModal}>
                <span>Отправить</span>
                <img src={done} alt='done'/>
            </MyButton>
        </form>
    );
}

export default MyForm;