import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import profileReducer from "./reducers/profileReducer";
import courseReducer from "./reducers/courseReducer";
import subscriptionReducer from "./reducers/subscriptionReducer";
import adminReducer from "./reducers/adminReducer";
import otherReducer from "./reducers/otherReducer";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./reducers/cartReducer";

// import process from 'dotenv'

// const url = import.meta.env.VITE_SERVER_URL

// export const server = `${url}/api/v1`;
export const server = `http://localhost:5000/api/v1`;
// export const server = `https://gsacademyback.onrender.com/api/v1`;

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
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store)
export default store;