import styles from './MyModal.module.scss';
import checkmark from '../../assets/modal/checkmark.png';

function MyModal({modal, setModal}) {
    const handleModal = () => setModal(false);

    return (
        <div className={`${styles.modal} ${modal ? styles.active : ''}`} onClick={handleModal}>
            <div className={`${styles.modal__content} ${modal ? styles.active : ''}`}>
                <img src={checkmark} alt="checkmark"/>
                <p>
                    Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.
                </p>
            </div>
        </div>
    );
}

export default MyModal;