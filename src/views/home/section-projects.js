import React from 'react';
import Button from '../../components/Button/button'


import '../../styles/typography.scss'
import '../../styles/utilities.scss';

import styles from './section-projects.module.scss'



function SectionProjects() {
    return (
      
        <div>

            <div className={styles.projects}>
                <div className={styles.projects__content}>
                    <div className={styles.sticky}>
                        <h1 className='heading heading__secondary -u-margin-bottom-medium'>FEATURED WORK</h1>
                        <p className="text text__large -u-margin-bottom-medium">Showcasing my projects, that are made with creativity and passion.</p>
                        <Button className="button" page="/projects" text="SEE MY WORK"/>
                    </div>
                    
                </div>
                <div className={styles.projects__items}>
                    <div className={styles.projects__item}>
                        <div className={styles.projects__image_box}>
                            <img data-aos="fade-left" data-aos-duration="1000" className={styles.projects__img} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1698305912/Andrew%20Kriegler/black-ink-home_u2dfmt_pslinm.jpg" alt=""></img>
                        </div>
                        <div className={styles.projects__desc}>
                            <h1 className="heading heading__projects-name">Black Ink Artists</h1>
                            <p className='text text__large'>2023</p>
                        </div>
                    </div>
                    <div className={styles.projects__grid}>
                        <div className={`${styles.projects__item} ${styles.projects__grid__1}}`} >
                            <div className={`${styles.projects__image_box} ${styles.projects__image_box__small}}`}>
                                <img data-aos="fade-right" data-aos-duration="1000" className={styles.projects__img} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1698305921/Andrew%20Kriegler/tiago-home_havits_ocn2fz.jpg" alt=""></img>
                            </div>
                            <div className={styles.projects__desc}>
                                <h1 className="heading heading__projects-name heading__projects-name--small">Tiago Croucamp</h1>
                                <p className='text text__regular'>2023</p>
                            </div>
                        </div>

                        <div className={`${styles.projects__item} ${styles.projects__grid__2}}`}>
                            <div className={`${styles.projects__image_box} ${styles.projects__image_box__small}}`}>
                                <img data-aos="fade-left" data-aos-duration="1000" className={styles.projects__img} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1698305916/Andrew%20Kriegler/imaan-home_swboez_iao1hd.jpg" alt=""></img>
                            </div>
                            <div className={styles.projects__desc}>
                                <h1 className="heading heading__projects-name heading__projects-name--small">Imaan's Photograpy</h1>
                                <p className='text text__regular'>2023</p>
                            </div>
                        </div>

                        <div className={`${styles.projects__item} ${styles.projects__grid__3}}`}>
                            <div className={`${styles.projects__image_box} ${styles.projects__image_box__small}}`}>
                                <img data-aos="fade-right" data-aos-duration="1000" className={styles.projects__img} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1698305914/Andrew%20Kriegler/femsolutions.net__4_dp6wax_zo1cim.png" alt=""></img>
                            </div>
                            <div className={styles.projects__desc}>
                                <h1 className="heading heading__projects-name heading__projects-name--small">Mitakon Innovation</h1>
                                <p className='text text__regular'>2023</p>
                            </div>
                        </div>

                        <div className={`${styles.projects__item} ${styles.projects__grid__4}}`}>
                            <div className={`${styles.projects__image_box} ${styles.projects__image_box__small}}`}>
                                <img data-aos="fade-left" data-aos-duration="1000" className={styles.projects__img} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1698305920/Andrew%20Kriegler/tariro-images_a5c5ka_moseoj.jpg" alt=""></img>
                            </div>
                            <div className={styles.projects__desc}>
                                <h1 className="heading heading__projects-name heading__projects-name--small">Tariro Kandawasvika</h1>
                                <p className='text text__regular'>2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

        </div>
     

    );
  }

  export default SectionProjects;