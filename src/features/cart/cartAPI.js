import axios from "axios";

export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await axios.post("http://localhost:8080/cart", item);
    const data = await response.data;
    resolve({ data });
  });
}

export function fetchItemsByUSerId(userId) {
  return new Promise(async (resolve) => {
    const response = await axios.get(
      `http://localhost:8080/cart?user=${userId}`
    );
    const data = response.data;
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await axios.patch(
      "http://localhost:8080/cart/" + update.id,
      update
    );
    const data = await response.data;
    resolve({ data });
  });
}

export function deleteFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await axios.delete("http://localhost:8080/cart/" + itemId);
    const data = await response.data;
    resolve({ data: { id: itemId } });
  });
}

export function resetCart(userId) {
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUSerId(userId);
    const items = response.data;
    for (let item of items) {
      await deleteFromCart(item.id);
    }
    resolve({ staus: "Success" });
  });
}
