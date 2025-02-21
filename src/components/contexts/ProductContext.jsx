import { createContext, useReducer } from "react";
import { categories } from "../../services/category.service";
import { products } from "../../services/products.service";

const initialState = {
  categories: categories,
  products: products,
  gender: 2,
  selectedCategory: categories.filter((item) => item.gender === 2)[0],
  selectedSubcategory: categories.filter((item) => item.gender === 2)[0]
    .subcategory[0],
};

const ProductReducer = (state, action) => {
  if (action.type === "selectCategory") {
    return {
      ...state,
      selectedCategory: action.payload,
      selectedSubcategory: action.payload.subcategory[0],
    };
  }
  if (action.type === "selectedSubcategory") {
    return { ...state, selectedSubcategory: action.payload };
  }
  if (action.type === "selectGender") {
    return {
      ...state,
      gender: action.payload,
      selectedCategory: categories.filter(
        (item) => item.gender === action.payload
      )[0],
      selectedSubcategory: categories.filter(
        (item) => item.gender === action.payload
      )[0].subcategory[0],
    };
  }
  if (action.type === "addCategory") {
    return { ...state, categories: [action.payload, ...state.categories] };
  }
  if (action.type === "addSubcategory") {
    return {
      ...state,
      categories: state.categories.map((elem) => {
        let isAdd = true;
        if (elem.id === state.selectedCategory.id) {
          elem.subcategory.forEach((el) => {
            if (el.id == action.payload.id) {
              isAdd = false;
              return;
            }
          });
          if (isAdd) {
            elem.subcategory.push(action.payload);
            return elem;
          }
        }
        return elem;
      }),
    };
  }
  if (action.type === "addProduct"){
    return {...state, products : [...state.products ,action.payload]}
  }
  return state;
};

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
