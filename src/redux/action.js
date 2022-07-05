import { ADD_ORDER, CHANGE_ORDER, DELETE_ORDER, GET_BY_ID, ORDER } from "./reducer";


export const usertype = (formData) => ({ type: ORDER, payload: formData });

export const getById = (id) => ({ type: GET_BY_ID, payload: id });

export const changeOrder = (formData) => ({type:CHANGE_ORDER, payload:formData})

export const deleteOrder = (id) => ({type:DELETE_ORDER, payload:id})

export const addOrder = (data) => ({type:ADD_ORDER, payload:data})
