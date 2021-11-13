import { fetchCategories } from '../api/categories';
import { fetchCats } from '../api/cats';
import { SET_CATEGORES, SET_LOADING_CATEGORIES_STATUS, SET_LOADING_CATS_STATUS, SET_CATS } from './types';

export function loadCategories() {
	return async function (dispatch) {
		dispatch(setLoadingCategoriesStatus(true))
		const categories = await fetchCategories()
		dispatch(setCategories(categories))
		dispatch(setLoadingCategoriesStatus(false))
	}
}

export function loadCats(categoryId, page) {
	console.log({categoryId});
	return async function (dispatch) {
		dispatch(setLoadingCatsStatus(true))
		const cats = await fetchCats(categoryId, page)
		dispatch(setCats(categoryId, cats))
		dispatch(setLoadingCatsStatus(false))
	}
}

export function setCats(categoryId, cats) {
	console.log(1, {categoryId});
	return {
		type: SET_CATS,
		payload: { categoryId, cats }
	}
}

export function setCategories(categories) {
	return {
		type: SET_CATEGORES,
		payload: { categories }
	}
}

export function setLoadingCategoriesStatus(status) {
	return {
		type: SET_LOADING_CATEGORIES_STATUS,
		payload: { status }
	}
}

export function setLoadingCatsStatus(status) {
	return {
		type: SET_LOADING_CATS_STATUS,
		payload: { status }
	}
}
