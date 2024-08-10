export const baseUrl = `http://localhost:8080/api`;

const uri = {
  createProductApi: `${baseUrl}/products`,
  getProductsApi: (id) => `${baseUrl}/products/:${id}`,
  getProductByIdApi: `${baseUrl}/products`,
  updateProductApi: (id) => `${baseUrl}/products/:${id}`,
  getCategoriesApi: `${baseUrl}/products/categories`,
};

export const {
  createProductApi,
  getProductsApi,
  getProductByIdApi,
  updateProductApi,
  getCategoriesApi,
} = uri;
