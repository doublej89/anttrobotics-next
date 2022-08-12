import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/login-modal-slice';

export default configureStore({
  reducer: {
    counter: loginReducer,
  },
})