import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import profileReducer from "./reducers/profileReducer";
import courseReducer from "./reducers/courseReducer";
import subscriptionReducer from "./reducers/subscriptionReducer";
import adminReducer from "./reducers/adminReducer";
import otherReducer from "./reducers/otherReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./reducers/cartReducer";
export const server = 'http://localhost:5000/api/v1';

const rootReducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
    cart: cartReducer
})

const persistConfig = ({
    key: 'root',
    storage,
    // version: 2
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)
export default store;