import React, { useEffect } from 'react'
import Loader from './components/Loader/Loader'
import Content from './components/Content/Content'
import './App.css'
import { loadCategories } from './store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { setLoadingCategoriesStatus } from './store/selectors'

export default function App() {

  const dispatch = useDispatch()
  const loadingCategories = useSelector(setLoadingCategoriesStatus)

  useEffect(() => {
    dispatch(loadCategories())
  }, [])

  return (
    <div className="app-wrapper">
      {
        loadingCategories ?
        <Loader /> :
        <Content />
      }
    </div>
  )
}