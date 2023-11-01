import React from 'react'

import Button from '../Button/button'

import styles from './Package.module.scss'

export default function Package(props) {
  return (
    <div className={styles.package}>
        

        
        <div className={styles.package__type}>
        <div className={styles.sticky}>
            <img alt='package icon' className="-u-margin-bottom" src={props.icon}/>
            <h1 className="heading heading__medium -u-margin-bottom">{props.type}</h1>
            {
                props.info.map((item,id)=>{
                    return <p key={id} className="text text__large">{item}</p>
                })
            }
            
        </div>
        <div className={styles.bottom}>
            <Button className="button" page="/contact" text="GET IN TOUCH"/>
        </div>
        
        </div>
        <div className={styles.package__details}>
            <h1 className="heading heading__medium -u-margin-bottom">OFFER DETAILS</h1>


            <div className={`${styles.package__detail}  -u-margin-bottom`}>
                <p data-aos="fade-right" data-aos-duration="1200" className="text text__large text--blue">PRICING</p>
                <p data-aos="fade-left" data-aos-duration="1200" className="text text__regular -u-margin-bottom">{props.pricing}</p>
            </div>
            <div className={`${styles.package__detail}  -u-margin-bottom`}>
                <p data-aos="fade-right" data-aos-duration="1200" className="text text__large text--blue">WEBSITE PAGES</p>
                <p data-aos="fade-left" data-aos-duration="1200" className="text text__regular -u-margin-bottom">{props.pages}</p>
            </div>
            <div className={`${styles.package__detail}  -u-margin-bottom`}>
                <p data-aos="fade-right" data-aos-duration="1200" className="text text__large text--blue">FEATURES</p>
                <p data-aos="fade-left" data-aos-duration="1200" className="text text__regular -u-margin-bottom">{props.features}</p>
            </div>
            <div className={`${styles.package__detail}  -u-margin-bottom`}>
                <p data-aos="fade-right" data-aos-duration="1200" className="text text__large text--blue">MAINTENANCE</p>
                <p data-aos="fade-left" data-aos-duration="1200" className="text text__regular -u-margin-bottom">{props.maintenance}</p>
            </div>
            <div className={`${styles.package__detail}  -u-margin-bottom`}>
                <p data-aos="fade-right" data-aos-duration="1200" className="text text__large text--blue">CONSULTATION CALLS</p>
                <p data-aos="fade-left" data-aos-duration="1200" className="text text__regular -u-margin-bottom">{props.calls}</p>
            </div>
            <div className={`${styles.package__detail}  -u-margin-bottom`}>
                <p data-aos="fade-right" data-aos-duration="1200" className="text text__large text--blue">COMMUNICATION</p>
                <p data-aos="fade-left" data-aos-duration="1200" className="text text__regular -u-margin-bottom">{props.communication}</p>
            </div>
            <div className={`${styles.package__detail}  -u-margin-bottom`}>
                <p data-aos="fade-right" data-aos-duration="1200" className="text text__large text--blue">TERMS & CONDITIONS</p>
                {
                    props.terms.map((item,id)=>{
                        return <p data-aos="fade-left" data-aos-duration="1200" className="text text__regular">{item}</p>
                    })
                }
                
            </div>
            <div className={`${styles.package__detail}  -u-margin-bottom`}>
                <p data-aos="fade-right" data-aos-duration="1200" className="text text__regular -u-margin-bottom">{props.condition}</p>
            </div>
        </div>
    </div>
  )
}
