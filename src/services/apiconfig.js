import Cookies from "js-cookie";

const apiconfig = async ({ endpoint, method = "GET", body = null }) => {
  
  const token = Cookies.get("x-auth-token");

  const options = {
    method,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      ...(token && {"x-auth-token": token})
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      const error = await response.json();
      console.error(error.error);
      throw {
        message: error.response?.data?.message || "Unknown error occurred",
        code: error.response?.data?.code || "UNKNOWN_ERROR",
      };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw { message: "Something went wrong", code: "REQUEST_ERROR" };
  }
};

export default apiconfig;
