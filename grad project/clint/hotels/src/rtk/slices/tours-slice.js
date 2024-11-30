import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


export const fetchTours=createAsyncThunk("toursSlice/fetchTours",async()=>{
  const res=await fetch("http://localhost:8000/api/tour/tours")
  const data=await res.json();
  return data;
})


const toursSlice=createSlice({
  initialState:[],
  name:"toursSlice",
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchTours.fulfilled,(state,action)=>{
      return action.payload;
    })
  }
})





export const {}=toursSlice.actions;
export default toursSlice.reducer;