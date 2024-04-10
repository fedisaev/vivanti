import styles from './Headling.module.scss';

function Headling({children}) {
    return (
        <h2 className={styles.headling}>{children}</h2>
    );
}

export default Headling;