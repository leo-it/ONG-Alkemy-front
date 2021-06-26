import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './HomeDataStore/homeStore';
import userReducer from './UserStore/UserStore';
import newsDetailsReducer from './NewsDetailsStore/NewsDetailsStore';

export default configureStore({
    reducer: {
        home: homeReducer,
        user: userReducer,
        newsDetails: newsDetailsReducer
    }
})