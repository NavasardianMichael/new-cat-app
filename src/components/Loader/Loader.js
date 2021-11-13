import React from 'react'
import styles from './loader.module.css'

export default function Loader() {

  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loader}>
      </div> 
    </div>
  )
}