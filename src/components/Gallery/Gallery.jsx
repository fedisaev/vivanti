import styles from './Gallery.module.scss';
import galleryOne from "../../assets/gallery/gallery-1.png";
import galleryTwo from "../../assets/gallery/gallery-2.png";
import galleryTwoMob from "../../assets/gallery/gallery-2-mob.png"
import galleryThree from "../../assets/gallery/gallery-3.png";
import galleryFour from "../../assets/gallery/gallery-4.png";
import galleryFive from "../../assets/gallery/gallery-5.png";
import gallerySix from "../../assets/gallery/gallery-6.png";
import gallerySeven from "../../assets/gallery/gallery-7.png";
import Headling from "../../ui/Headling/Headling.jsx";
import {forwardRef} from "react";

const Gallery = forwardRef(function Gallery(_, ref) {
    return (
        <section>
            <div className="container">
                <div ref={ref} className={styles.gallery}>
                    <Headling>Галерея</Headling>
                    <div className={styles.gallery__grid}>
                        <img className={styles.grid__item_1} src={galleryOne} alt='gallery one'/>
                        <img className={styles.grid__item_2} src={galleryTwo} alt='gallery two'/>
                        <img className={styles.grid__item_2_mob} src={galleryTwoMob} alt='gallery two'/>
                        <img className={styles.grid__item_3} src={galleryThree} alt='gallery three'/>
                        <img className={styles.grid__item_4} src={galleryFour} alt='gallery four'/>
                        <img className={styles.grid__item_5} src={galleryFive} alt='gallery five'/>
                        <img className={styles.grid__item_6} src={gallerySix} alt='gallery six'/>
                        <img className={styles.grid__item_7} src={gallerySeven} alt='gallery seven'/>
                    </div>
                </div>
            </div>
        </section>
    );
})

export default Gallery;