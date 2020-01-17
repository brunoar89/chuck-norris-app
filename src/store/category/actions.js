import * as definitions from 'store/category/definitions';

export function fetchCategories(filter) {
  return {
    type: definitions.FETCH_CATEGORIES,
    payload: filter,
  };
}

export function fetchCategory(id) {
  return {
    type: definitions.FETCH_CATEGORY,
    payload: id,
  };
}
