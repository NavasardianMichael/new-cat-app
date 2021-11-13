import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cats from "../Cats/Cats";
import NoCategoriesHint from '../NoCategoriesHint/NoCategoriesHint'
import Categories from '../Categories/Categories'
import { useSelector } from "react-redux";
import { selectLoadingCatsStatus } from "../../store/selectors";
import Loader from "../Loader/Loader";
import styles from './content.module.css'

export default function Content() {

  const loadingCats = useSelector(selectLoadingCatsStatus)

  return (
    <div>
      <Router>
        <Categories />
        <div className={styles.content}>
          {
            loadingCats ?
            <Loader /> :
            <Switch>
              <Route path="/categories/:categoryId">
                <Cats />
              </Route>
              <Route path="/">
                <NoCategoriesHint />
              </Route>
            </Switch>
          }
        </div>
      </Router>
    </div>
  );
}