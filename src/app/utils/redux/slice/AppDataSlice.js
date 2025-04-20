import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isBottomTabsVisible: true,
    isLoggedIn: false,
}

const AppDataSlice = createSlice({
    name: 'AppDataSlice',
    initialState,
    reducers: {
       setIsBottomTabsVisible: (state, action) => {
            const { visible } = action.payload;
            return {
                ...state,
                isBottomTabsVisible: visible
            }
        },
        setIsLoggedIn: (state, action) => {
            const { isLoggedIn } = action.payload;
            return {
                ...state,
                isLoggedIn
            }
        }
    }
})

export const {
    setIsBottomTabsVisible,
    setIsLoggedIn
    
} = AppDataSlice.actions;

export default AppDataSlice.reducer;