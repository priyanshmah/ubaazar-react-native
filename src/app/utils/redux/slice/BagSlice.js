import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedAddress: '',
    products: [],
    appliedCoupon: '',
    priceDetails: {
        totalMrp: 0,
        subTotal: 0,
        couponDiscount: 0,
        codCharges: 0,
    },
    paymentMode: 'ONLINE'
}

const BagSlice = createSlice({
    name: 'BagSlice',
    initialState,
    reducers: {
        setPriceDetails: (state, action) => {
            const {
                totalMrp = state.priceDetails.totalMrp,
                subTotal = state.priceDetails.subTotal,
                codCharges = state.priceDetails.codCharges,
                couponDiscount = state.priceDetails.couponDiscount
            } = action.payload;

            return {
                ...state,
                priceDetails: {
                    ...state.priceDetails,
                    totalMrp,
                    subTotal,
                    codCharges,
                    couponDiscount
                }
            };
        },
        setPaymentMode: (state, action) => {
            const { paymentMode } = action.payload;

            if (paymentMode === 'COD') {
                return {
                    ...state,
                    paymentMode,
                    priceDetails: {
                        ...state.priceDetails,
                        codCharges: 79,
                    }
                };
            } else {
                return {
                    ...state,
                    paymentMode,
                    priceDetails: {
                        ...state.priceDetails,
                        codCharges: 0,
                    }
                };
            }
        },
        setAppliedCoupon: (state, action) => {
            const { discountCoupon } = action.payload;
            return { ...state, appliedCoupon: discountCoupon }
        },
        setSelectedAddress: (prevState, action) => {
            const { address='' } = action.payload;
            return { ...prevState, selectedAddress: address }
        },
        setProductQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
        
            const productIndex = state.products.findIndex(
                (value) => value?.id?.toString() === productId?.toString()
            );

            if (productIndex === -1) return;
            const product = state.products[productIndex];
            
            const price = product.price || 0;
            const mrp = Math.round(price * 1.5);
            const prevQuantity = product.quantity; 
        
            
            product.quantity = quantity;
            state.priceDetails.totalMrp += (quantity - prevQuantity) * mrp;
            state.priceDetails.subTotal += (quantity - prevQuantity) * price;

        },
        setProducts: (state, action) => {
            const { products } = action.payload;
            let totalMrp = 0;
            let subTotal = 0;
           
            products.forEach(item => {
                const price = item.price || 0;
                const quantity = item.quantity || 0;
                const mrp = Math.round(price * 1.5);

                totalMrp += mrp * quantity;
                subTotal += price * quantity;
            });
           
            return {
                ...state,
                products,
                appliedCoupon: '',
                paymentMode: 'ONLINE',
                priceDetails: {
                    totalMrp: totalMrp,
                    subTotal: subTotal,
                    couponDiscount: 0,
                }
            }
        }
    }
})

export const {
    setPriceDetails,
    setPaymentMode,
    setAppliedCoupon,
    setSelectedAddress,
    setProductQuantity,
    setProducts
} = BagSlice.actions;

export default BagSlice.reducer;