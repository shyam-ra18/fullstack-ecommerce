import axios from "axios";

export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await axios.post("http://localhost:8080/orders", order);
    const data = await response.data;
    resolve({ data });
  });
}

export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const response = await axios.patch(
      "http://localhost:8080/orders/" + order.id,
      order
    );
    const data = await response.data;
    resolve({ data });
  });
}

export function fetchAllOrders(pagination, sort) {
  let queryString = "";
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  return new Promise(async (resolve) => {
    const response = await axios.get(
      `http://localhost:8080/orders?${queryString}`
    );
    const data = await response.data;
    const totalOrders = await response.headers.get("X-Total-Count");
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}
