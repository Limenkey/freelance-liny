import { configureStore } from '@reduxjs/toolkit';

import appReducer from '../components/App/appSlice'


export default configureStore({
  reducer: {
    app: appReducer,
  },
  devTools: true,
})