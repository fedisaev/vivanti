import styles from './MyButton.module.scss';

function MyButton({type, children}) {
    return (
        <button type={type} className={styles.button}>{children}</button>
    );
}

export default MyButton;