import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const url = "https://api.spacexdata.com/v3/rockets"


export const getAPI = createAsyncThunk(

 'Rockets/fetchRocket', async () =>{ 
  try{
  const response = await axios.get(url)
    console.log(response)
    return response.data
  } catch(err){
    return err.message
  }

}
)