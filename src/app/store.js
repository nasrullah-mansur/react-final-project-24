import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/productsSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
    },
});

export default store;
