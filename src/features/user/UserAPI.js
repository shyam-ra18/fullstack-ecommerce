import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await axios.get(
      "http://localhost:8080/orders/?user.id=" + userId
    );
    const data = await response.data;
    resolve({ data });
  });
}

export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await axios.get("http://localhost:8080/users/" + userId);
    const data = await response.data;
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await axios.patch(
      "http://localhost:8080/users/" + update.id,
      JSON.stringify(update),
      config
    );
    const data = await response.data;
    resolve({ data });
  });
}
