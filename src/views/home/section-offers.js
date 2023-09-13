import React from 'react';

import './section-offers.scss';
import '../../styles/typography.scss'
import '../../styles/utilities.scss';




function SectionOffers() {
    return (
      
      <div className="section-offers">
        <div className='offers'>
        <div className="offers__content">
            <p className="text text__large">WHAT I OFFER</p>
        </div>
            <div className="offers__items">
                <div className='offers__item'>
                    <div className="offers__image-box offers__image-box--1">
                        <img src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694420184/Andrew%20Kriegler/design_medx1t.svg" alt="" className="offers__img"/>
                    </div>
                    <div className='offers__desc'>
                        <h1 className='heading heading__tertiary -u-margin-bottom-small'>DESIGN</h1>
                        <p className="text text__regular">Innovative designs that look & feel good.</p>
                    </div>
                </div>
                <div className='offers__item'>
                    <div className="offers__image-box offers__image-box--1">
                        <img src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694421385/Andrew%20Kriegler/developement_sssaaz.svg" alt="" className="offers__img"/>
                    </div>
                    <div className='offers__desc'>
                        <h1 className='heading heading__tertiary -u-margin-bottom-small'>DEVELOPEMENT</h1>
                        <p className="text text__regular">Code or no code, I am there to develop your dreams.</p>
                    </div>
                </div>
                <div className='offers__item'>
                    <div className="offers__image-box offers__image-box--1">
                        <img src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694421382/Andrew%20Kriegler/branding_ewznty.svg" alt="" className="offers__img"/>
                    </div>
                    <div className='offers__desc'>
                        <h1 className='heading heading__tertiary -u-margin-bottom-small'>BRANDING</h1>
                        <p className="text text__regular">Create your brand beginning with your website.</p>
                    </div>
                </div>
                <div className='offers__item'>
                    <div className="offers__image-box offers__image-box--1">
                        <img src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694421392/Andrew%20Kriegler/elevation_gs99wi.svg" alt="" className="offers__img"/>
                    </div>
                    <div className='offers__desc'>
                        <h1 className='heading heading__tertiary -u-margin-bottom-small'>ELEVATION</h1>
                        <p className="text text__regular">I will elevate your current business position.</p>
                    </div>
                </div>
            </div>
        </div>
       
        
      </div>
    );
  }

  export default SectionOffers;