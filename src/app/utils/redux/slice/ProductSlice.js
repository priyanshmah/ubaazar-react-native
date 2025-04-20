import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedProductId: null,
    productData: null,
    selectedVariantId: null,
    selectedSize: null,
    variantData: null,
}

const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {
        setProductId: (state, action) => {
            state.selectedProductId = action.payload?.productId ?? null;
        },
        setVariantId: (state, action) => {
            state.selectedVariantId = action.payload?.variantId ?? null;
        },
        setProductData: (state, action) => {
            state.productData = action.payload?.data ?? {};
        },
        setSelectedSize: (state, action) => {
            state.selectedSize = action.payload?.selectedSize ?? null;
        },
        setVariantData: (state, action) => {
            state.variantData = action.payload?.data ?? null;
        },
        resetProductState: () => {
            return {
                selectedProductId: null,
                productData: null,
                selectedVariantId: null,
                selectedSize: null,
                variantData: null,
            }
        }
    }
})

export const {
    setProductData,
    setProductId,
    setVariantId,
    setSelectedSize,
    setVariantData,
    resetProductState
} = ProductSlice.actions;

export default ProductSlice.reducer;