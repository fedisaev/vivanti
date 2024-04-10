import styles from './MyButton.module.scss';

function MyButton({type, children, onClick}) {
    return (
        <button onClick={onClick} type={type} className={styles.button}>{children}</button>
    );
}

export default MyButton;