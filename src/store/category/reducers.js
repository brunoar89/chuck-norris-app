import * as definitions from 'store/category/definitions';

const initialState = {
  collection: [],
  find: {},
  loading: true,
};

function Category(state = initialState, action) {
  switch (action.type) {
    case definitions.FETCH_CATEGORIES_FULFILLED: {
      return {
        ...state,
        collection: action.payload.data,
        loading: false,
      };
    }
    case definitions.FETCH_CATEGORY_FULFILLED: {
      return {
        ...state,
        find: action.payload.data,
        loading: false,
      };
    }
    case definitions.FETCH_CATEGORIES:
    case definitions.FETCH_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default Category;