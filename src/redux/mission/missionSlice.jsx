import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchAPI = createAsyncThunk(

  'Mission/fetchMission', async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

const initialState = {
  missionList: [],
  isLoading: false,
  error: undefined,
};

const MissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPI.pending, (state) => {
      const newState = state;
      newState.isLoading = true;
    })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        const newState = state;
        const mission = [];
        action.payload.map((item) => {
          let newMission = {};
          newMission = {
            id: item.mission_id,
            name: item.mission_name,
            desc: item.description,
          };
          return mission.push(newMission);
        });
        newState.missionList = mission;
        newState.isLoading = false;
      })
      .addCase(fetchAPI.rejected, (state, action) => {
        const newState = state;
        newState.isLoading = false;
        newState.rocketList = [];

        newState.error = action.error.message;
      });
  },
});

export default MissionSlice.reducer;
