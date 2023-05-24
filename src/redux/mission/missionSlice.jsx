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
  extraReducers(builder) {
    builder
      .addCase(fetchAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
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
        state.missionList = mission;
        state.isLoading = false;
      })
      .addCase(fetchAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.rocketList = [];

        state.error = action.error.message;
      });
  },
});

export default MissionSlice.reducer;
