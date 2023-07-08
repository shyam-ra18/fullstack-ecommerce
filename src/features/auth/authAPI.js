import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await axios.post(
      "http://localhost:8080/users",
      JSON.stringify(userData),
      config
    );
    const data = await response.data;
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await axios.get(
      "http://localhost:8080/users?email=" + email
    );
    const data = await response.data;
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "wrong credentials" });
      }
    } else {
      reject({ message: "user not found" });
    }
  });
}

export function signOutUser(userId) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
