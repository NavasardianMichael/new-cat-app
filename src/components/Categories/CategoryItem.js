import React, { memo } from 'react'
import { Link } from "react-router-dom"
import styles from './categories.module.css'

export default memo(function({ id, name, isActive }) {
  return (
    <div className={`${styles.category_item}${isActive ? ' active' : ''}`}>
      <Link to={`/categories/${id}`}>{name}</Link>
    </div>
  )
})