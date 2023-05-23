import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const url = "https://api.spacexdata.com/v3/rockets"


export const getAPI = createAsyncThunk(

 'Rockets/fetchRocket', async () =>{ 
  try{
  const response = await axios.get(url)
    console.log(response.data)
    return response.data
  } catch(err){
    return err.message
  }

}
)


const initialState = {
    rocketList : [],
      isLoading: false,
      error: undefined,
};

 const rocketsSlice = createSlice({
    name: "rockets",
    initialState,
    reducers: {
    },
    extraReducers (builder) {
      builder
      .addCase(getAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAPI.fulfilled, (state,action) => {
        state.rocketList = action.payload
        
        state.isLoading = false
      })
      .addCase(getAPI.rejected, (state,action) => {
        state = false;
        state.rocketList = [];
        
        state.error = action.error.message
      })
    }
 })


 export default rocketsSlice.reducer