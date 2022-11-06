import axios from "axios";
import { useReducer, useEffect } from "react";

// Action

const ACTION={
    API_REQUEST:"API_REQUEST",
    FETCH_DATA:"FETCH_DATA",
    ERROR:"ERROR"
}
//InitialState
const initialState={
  data:[],
  loading: false,
  error: null
}

const reducer=(state, action)=>{
  switch(action.type){
    case ACTION.API_REQUEST:
      return{...state, data:[], loading:true}
    case ACTION.FETCH_DATA:
      return{...state, data:action.payload.data, loading:false}
    case ACTION.ERROR:
      return{...state, data:[], error:action.payload}
  }
}


const useFetch=(url)=>{
  const [state, dispatch]=useReducer(reducer, initialState)

  useEffect(()=>{
    dispatch({type:ACTION.API_REQUEST});
    axios.get(url).then((res)=>{
      console.log(res)
      dispatch({type: ACTION.FETCH_DATA, payload:res.data});
    }).catch((e)=>{
      dispatch({type:ACTION.ERROR, payload:e.error})
    })
  },[url])



  return state
}
export default useFetch;