import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
          const { title, items } = category;
          acc[title.toLowerCase()] = items;
          return acc;
   }, {}))

// export const selectCategories = (state) => {
//   console.log("category component select function")
//   return state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
// };

// const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//   const { title, items } = docSnapshot.data();
//   acc[title.toLowerCase()] = items;
//   return acc;
// }, {});
