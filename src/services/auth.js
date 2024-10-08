import { setItem } from "../common/utils/commonFunction";

export const authenticationService = {
  baseUrl: `${process.env.BASE_URL}`,

  async signin(body) {
    const endpoint = `http://localhost:8080/api/auth/signin`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(body),
    };
    try {
      const res = await fetch(endpoint, options);
      if (!res.ok) {
        throw new Error("something went wrong");
      } else {
        const token = res.headers.get("X-Auth-Token");
        if (token) {
          setItem("token", token); // Save token in localStorage
        } else {
          console.error("Token not found in response headers");
        }
        const data = await res.json();
        return data;
      }
    } catch (error) {
      console.log(error);
      throw error?.message || "Something went wrong";
    }
  },

  async signup(body) {
    const endpoint = `http://localhost:8080/api/auth/signup`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: JSON.stringify(body),
    };

    try {
      const res = await fetch(endpoint, options);
      if (!res.ok) {
        throw new Error("Something went wrong");
      } else {
        const data = await res.json();
        return data;
      }
    } catch (error) {
      throw new Error(error?.message || "Something went wrong");
    }
  },
};
