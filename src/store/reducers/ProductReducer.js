// import { initialState } from "../../constants/jsonData/ProductState";

const initialState = {
    productList: [
      {
        _id: "6738e20ec0a2f337058b0eaf",
        name: "Fjallraven - Foldsack No. 1 Backpack",
        category: "Apparel",
        price: 10000,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        manufacturer: "Fjallraven",
        availableItems: 10,
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        version: 0,
        _class: "com.upgrad.ecommerce.models.Product",
      },
      {
        _id:  "6738e30fc0a2f337058b0eb0",
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        category: "Apparel",
        price: 800,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing",
        manufacturer: "Puma",
        availableItems: 8,
        imageUrl:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        version: 0,
        _class: "com.upgrad.ecommerce.models.Product",
      },
      {
        _id: "6738e369c0a2f337058b0eb1",
        name: "2TB Elements Portable External Hard Drive - USB 3.0 ",
        category: "Electronics",
        price: 3000,
        description:
          "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7",
        manufacturer: "WD",
        availableItems: 8,
        imageUrl: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        version: 0,
        _class: "com.upgrad.ecommerce.models.Product",
      },
      {
        _id: "6738e3b2c0a2f337058b0eb2",
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s ",
        category: "Electronics",
        price: 1500,
        description:
          "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) ",
        manufacturer: "SanDisk",
        availableItems: 300,
        imageUrl: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        version: 0,
        _class: "com.upgrad.ecommerce.models.Product",
      },
    ],
  };
export default (state=initialState,action) => {

    return state;
}