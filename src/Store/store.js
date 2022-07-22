


import { configureStore } from '@reduxjs/toolkit'
import Reducer from '../Reducers/Reducer'
export default configureStore({
    reducer: {
        toDo: Reducer,
}
 
})





















