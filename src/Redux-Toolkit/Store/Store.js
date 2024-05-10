import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from '../Slice/ReduxSlice'

// eslint-disable-next-line import/prefer-default-export

export const store = configureStore({
    reducer: {
        data: reduxReducer,
    },
})
