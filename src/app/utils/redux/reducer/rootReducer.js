import { combineReducers } from "@reduxjs/toolkit";

import BagReducer from '../slice/BagSlice';
import ProductReducer from '../slice/ProductSlice';
import FeedReducer from '../slice/FeedSlice';
import AppDataReducer from '../slice/AppDataSlice';

const rootReducer = combineReducers({
    bag: BagReducer,
    product: ProductReducer,
    feed: FeedReducer,
    appData: AppDataReducer
})

export default rootReducer;