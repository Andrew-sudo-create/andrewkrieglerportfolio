import React from 'react';
import Button from '../../components/Button/button'

import './section-projects.scss';
import '../../styles/typography.scss'
import '../../styles/utilities.scss';




function SectionProjects() {
    return (
      
        <div className="section-projects">

            <div className='projects'>
                <div className="projects__content">
                    <div className="sticky">
                        <h1 className='heading heading__secondary -u-margin-bottom-medium'>FEATURED WORK</h1>
                        <p className="text text__large -u-margin-bottom-medium">Showcasing my projects, that are made with creativity and passion.</p>
                        <Button className="button" page="/projects" text="SEE MY WORK"/>
                    </div>
                    
                </div>
                <div className="projects__items">
                    <div className="projects__item">
                        <div className="projects__image-box">
                            <img className="projects__img" src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694504188/Andrew%20Kriegler/Home_ejiepj.jpg" alt=""></img>
                        </div>
                        <div className="projects__desc">
                            <h1 className="heading heading__projects-name">Come Honey Photo & Film</h1>
                            <p className='text text__large'>2023</p>
                        </div>
                    </div>
                    <div className="projects__grid">
                        <div className="projects__item projects__grid--1">
                            <div className="projects__image-box projects__image-box--small">
                                <img className="projects__img" src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694504463/Andrew%20Kriegler/tiago-home_havits.jpg" alt=""></img>
                            </div>
                            <div className="projects__desc">
                                <h1 className="heading heading__projects-name heading__projects-name--small">Tiago Croucamp</h1>
                                <p className='text text__regular'>2023</p>
                            </div>
                        </div>

                        <div className="projects__item projects__grid--2">
                            <div className="projects__image-box projects__image-box--small">
                                <img className="projects__img" src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694505740/Andrew%20Kriegler/imaan-home_swboez.jpg" alt=""></img>
                            </div>
                            <div className="projects__desc">
                                <h1 className="heading heading__projects-name heading__projects-name--small">Imaan's Photograpy</h1>
                                <p className='text text__regular'>2023</p>
                            </div>
                        </div>

                        <div className="projects__item projects__grid--3">
                            <div className="projects__image-box projects__image-box--small">
                                <img className="projects__img" src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694508391/Andrew%20Kriegler/black-ink-home_u2dfmt.jpg" alt=""></img>
                            </div>
                            <div className="projects__desc">
                                <h1 className="heading heading__projects-name heading__projects-name--small">Black Ink Artists</h1>
                                <p className='text text__regular'>2023</p>
                            </div>
                        </div>

                        <div className="projects__item projects__grid--4">
                            <div className="projects__image-box projects__image-box--small">
                                <img className="projects__img" src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694510682/Andrew%20Kriegler/tariro-images_a5c5ka.jpg" alt=""></img>
                            </div>
                            <div className="projects__desc">
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