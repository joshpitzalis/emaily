import { combineReducers } from 'redux'
import authSlice from './components/auth/authSlice'

export default combineReducers({
  auth: authSlice.reducer
})
