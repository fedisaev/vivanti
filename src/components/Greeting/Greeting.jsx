import styles from './Greeting.module.scss';

function Greeting() {
    return (
        <section>
            <div className={`container ${styles.greetings}`}>
                <span>Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!</span>
            </div>
        </section>
    );
}

export default Greeting;