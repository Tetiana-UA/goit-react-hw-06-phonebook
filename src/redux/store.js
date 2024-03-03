import { configureStore } from "@reduxjs/toolkit";

const initialState = {
contacts:[],
}

const reducer = (state=initialState) => state; 

export const store = configureStore(reducer);


