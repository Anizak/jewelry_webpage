import { createContext, useReducer } from "react";
import { categories } from "../../services/category.service";

const initialState = {
  categories: categories,
  products: [],
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
      selectedSubcategory : categories.filter(
        (item) => item.gender === action.payload
      )[0].subcategory[0],
    };
  }
  if (action.type === "addCategory") {
    console.log(action.payload);

    return { ...state, categories: [action.payload, ...state.categories] };
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
