import React, { useState } from 'react'

import styles from './accordion.module.scss'



export default function Accordion({title,content}) {
  
  const [isActive,setIsActive] = useState(false)

  return (
    
          <div className={styles.faqs__item}>
            <div className={styles.faqs__flex} onClick={() => setIsActive(!isActive)}>
              <h1 className="heading heading__tertiary -u-margin-bottom-small">{title}</h1>
             
            </div>
            {isActive && <h1 className={`${styles.faqs__content} text text__regular`}>{content}</h1>}
          </div>
    
  )
}
