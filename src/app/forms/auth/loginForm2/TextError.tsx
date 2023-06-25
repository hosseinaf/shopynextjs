import React from 'react'
import styles from './page.module.css';

function TextError(props:any) {
  return (
    <div className={styles.error}>
        {props.children}
    </div>
  )
}

export default TextError