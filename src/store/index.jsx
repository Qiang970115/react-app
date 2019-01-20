// import { createStore, applyMiddleware,combineReducers} from "redux"
// import thunk from "redux-thunk";

// import indexReducer from "./reducer/index"

// const allReducer= combineReducers({
//     indexReducer
// })

// export default createStore(allReducer, applyMiddleware(thunk))

import { createStore } from "redux"

  let initStore = {
    dataList:[],
    use:{}
    }

 let redurexs = (state = initStore,{type,payload})=>{
    switch (type){
        case "UPDATE" :
            return {...state,dataList:[...payload]}
        case "USE" :
            return {...state,use:{...payload}}
        default :
            return {...state}
    }
 }
 export default createStore(redurexs)

 