// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    joinMission: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.missions = state.missions.map((mission) => (mission.id === action.payload
        ? { ...mission, reserved: true }
        : mission));
    },
    leaveMission: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.missions = state.missions.map((mission) => (mission.id === action.payload
        ? { ...mission, reserved: false }
        : mission));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'succeeded';
        // eslint-disable-next-line no-param-reassign
        state.missions = action.payload.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          desc: mission.description,
          reserved: false,
        }));
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'failed';
        // eslint-disable-next-line no-param-reassign
        state.error = action.error.message;
      });
  },
});

export const selectMissions = (state) => state.missions.missions;
export const { joinMission, leaveMission } = missionSlice.actions;

export default missionSlice.reducer;
