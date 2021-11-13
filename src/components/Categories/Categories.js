import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { selectCategories } from '../../store/selectors'
import CategoryItem from './CategoryItem'

import styles from './categories.module.css'
import { useParams } from 'react-router'

export default function Categories() {

  let params = useParams()
  const categoryId = params?.categoryId
  const categories = useSelector(selectCategories, shallowEqual)
console.log({params});
  if(!categories || !categories.length) return null
  
  return (
    <div className={styles.categories}>
      {
        categories.map(category => (
          <CategoryItem
            key={category.id}
            id={category.id}
            name={category.name}
            isActive={categoryId === category.id}
          />
        ))
      }
    </div>
  );
}