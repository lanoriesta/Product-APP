import { create } from "zustand";

const useProductStore = create((set) => ({
  loaders: false,
  cart: [],
  products: [],
  product: {},
  getProducts: async () => {
    set({ loaders: true });
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) throw new Error("failed to fetch");

      const data = await res.json();

      set({ products: data });
      set({ loaders: false });
    } catch (error) {
      console.log(error);
    }
  },
  getProduct: async (id) => {
    set({ loaders: true });
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) throw new Error("failed to fetch product");

      const product = await res.json();
      set({ product: product });
      set({ loaders: false });
    } catch (error) {
      console.log(error);
    }
  },
  addToCart: (product) => {
    try {
      set((state) => ({
        cart: [...state.cart, product],
      }));
    } catch (error) {
      console.log(error);
    }
  },
  removeFromCart: (id) => {
    try {
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProductStore;
