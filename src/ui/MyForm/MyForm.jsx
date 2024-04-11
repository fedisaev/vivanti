import styles from './MyForm.module.scss';
import done from "../../assets/ui/done.svg";
import MyButton from "../../ui/MyButton/MyButton.jsx";
import {useState} from "react";

function MyForm({setModal}) {

    const [formValid, setFormValid] = useState({
        lastName: true, firstName: true, middleName: true,
    });
    const handleSendData = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
        let isFormValid = true;
        if (!formProps.lastName?.trim().length) {
            setFormValid(prevState => ({...prevState, lastName: false}));
            isFormValid = false;
        }else{
            setFormValid(prevState => ({...prevState, lastName: true}));
        }
        if (!formProps.firstName?.trim().length) {
            setFormValid(prevState => ({...prevState, firstName: false}));
            isFormValid = false;
        }else{
            setFormValid(prevState => ({...prevState, firstName: true}));
        }
        if (!formProps.middleName?.trim().length) {
            setFormValid(prevState => ({...prevState, middleName: false}));
            isFormValid = false;
        }else{
            setFormValid(prevState => ({...prevState, middleName: true}));
        }
        if (!isFormValid){
            return;
        }
        setModal(true);
    }
    return (
        <form className={styles.form} onSubmit={handleSendData}>
            <div className={styles.form__inputs}>
                <input className={`${styles.form__input} ${formValid.lastName ? '' : styles.invalid}`}
                       type="text"
                       placeholder='Фамилия'
                       name='lastName'/>
                <input className={`${styles.form__input} ${formValid.firstName ? '' : styles.invalid}`}
                       type="text"
                       placeholder='Имя'
                       name='firstName'/>
                <input className={`${styles.form__input} ${formValid.middleName ? '' : styles.invalid}`}
                       type="text"
                       placeholder='Отчество'
                       name='middleName'/>
            </div>
            <MyButton type='submit'>
                <span>Отправить</span>
                <img src={done} alt='done'/>
            </MyButton>
        </form>
    );
}

export default MyForm;