import apiconfig from "./apiconfig";
import { createProductApi } from "./endpoint";

export const productService = {

  async createProducts(payload) {
    return apiconfig({ endpoint: createProductApi, method: "POST", body:payload });
  },

  async getProducts(){
    return apiconfig({endpoint:createProductApi})
  }
};
