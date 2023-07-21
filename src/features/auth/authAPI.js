import axios from "axios";

export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await axios.post(
      "http://localhost:8080/auth/signup",
      userData
    );
    const data = await response.data;
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      });
      if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        console.log("check...", data);
        resolve({ data });
      } else {
        const err = response;
        reject(err);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function signOutUser(userId) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
