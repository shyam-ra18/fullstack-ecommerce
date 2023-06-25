import axios from "axios";

export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await axios.get("http://localhost:8080/products");
    const data = response.data;
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await axios.get("http://localhost:8080/products/"+id);
    const data = response.data;
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  return new Promise(async (resolve) => {
    const response = await axios.get(
      `http://localhost:8080/products?${queryString}`
    );
    const data = await response.data;
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}


export function fetchAllCategories() {
  return new Promise(async (resolve) => {
    const response = await axios.get("http://localhost:8080/categories");
    const data = response.data;
    resolve({ data });
  });
}

export function fetchAllBrands() {
  return new Promise(async (resolve) => {
    const response = await axios.get("http://localhost:8080/brands");
    const data = response.data;
    resolve({ data });
  });
}
