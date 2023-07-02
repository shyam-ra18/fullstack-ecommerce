import axios from "axios";

export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await axios.post(
      "http://localhost:8080/orders",
      JSON.stringify(order)
    );
    const data = await response.data;
    resolve({ data });
  });
}
