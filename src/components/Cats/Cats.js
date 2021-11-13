import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usePrevious } from '../../hooks/usePrevious';
import { loadCats } from '../../store/actions';
import { selectCats } from '../../store/selectors';
import CatItem from './CatItem';

import styles from './cats.module.css'

export default function Cats() {

  let params = useParams()
  const categoryId = params?.categoryId
  
  const dispatch = useDispatch()
  const cats = useSelector(selectCats(categoryId))

  const previousId = usePrevious(categoryId)
  
  useEffect(() => {
    console.log({previousId, categoryId});
    if(!categoryId || !previousId || previousId === categoryId) return
    dispatch(loadCats(categoryId))
  }, [categoryId])

  if(!cats.length) return null
  return (
    <div className={styles.cats_wrapper}>
      {
        cats.map(cat => {
          return <CatItem key={cat.id} imgSrc={cat.url} />
        })
      }
    </div>
  )
}