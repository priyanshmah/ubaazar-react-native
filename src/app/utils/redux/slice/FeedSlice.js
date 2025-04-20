import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: 'all',
    allProducts: null,
    categorisedProducts: null,
    products: null
};

const FeedSlice = createSlice({
    name: 'FeedSlice',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {            
            state.selectedCategory = action.payload?.category ?? null;
        },
        setTrendingProducts: (state, action) => {
            state.trendingProducts = action.payload?.products ?? null;
        },
        setCategorisedProducts: (state, action) => {
            state.categorisedProducts = action.payload?.products ?? null;
        },
        setProducts: (state, action) => {
            state.products = action.payload?.products ?? null;
        },
        setAllProducts: (state, action) => {
            state.allProducts = action.payload?.products ?? null;
        },
    }
});

export const {
    setCategorisedProducts,
    setSelectedCategory,
    setTrendingProducts,
    setProducts,
    setAllProducts
} = FeedSlice.actions;

export default FeedSlice.reducer;

