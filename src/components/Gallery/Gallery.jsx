import styles from './Gallery.module.scss';
import galleryOne from "../../assets/gallery-1.png";
import galleryTwo from "../../assets/gallery-2.png";
import galleryThree from "../../assets/gallery-3.png";
import galleryFour from "../../assets/gallery-4.png";
import galleryFive from "../../assets/gallery-5.png";
import gallerySix from "../../assets/gallery-6.png";
import gallerySeven from "../../assets/gallery-7.png";
import Headling from "../../ui/Headling/Headling.jsx";

function Gallery() {
    return (
        <section>
            <div className="container">
                <div className={styles.gallery}>
                    <Headling>Галерея</Headling>
                    <div className={styles.gallery__grid}>
                        <img className={styles.grid__item_1} src={galleryOne} alt="gallery-one"/>
                        <img className={styles.grid__item_2} src={galleryTwo} alt="gallery-two"/>
                        <img src={galleryThree} alt="gallery-three"/>
                        <img src={galleryFour} alt="gallery-four"/>
                        <img src={galleryFive} alt="gallery-five"/>
                        <img src={gallerySix} alt="gallery-six"/>
                        <img className={styles.grid__item_7} src={gallerySeven} alt="gallery-seven"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;