import axios from "axios";

export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await axios.get("http://localhost:8080/products");
    const data = response.data;
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  // for (let key in sort) {
  //   queryString += `${key}=${lastCategoryValue}&`;
  // }
  return new Promise(async (resolve) => {
    const response = await axios.get(
      `http://localhost:8080/products?${queryString}`
    );
    const data = response.data;
    resolve({ data });
  });
}
