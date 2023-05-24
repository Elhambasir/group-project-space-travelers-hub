import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];
const url = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const resultArr = Array.from(data).map((mission) => ({
      id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      reserved: false,
    }));
    return resultArr;
  } catch (error) {
    throw new Error('Failed to fetch missions.');
  }
});
export const MissionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        const updatedMission = { ...mission, reserved: !mission.reserved };
        return updatedMission;
      }
      return mission;
    }),
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});
export const { joinMission } = MissionsSlice.actions;
export default MissionsSlice.reducer;
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const url = 'https://api.spacexdata.com/v3/missions';

// export const fetchAPI = createAsyncThunk(
//   'missions/fetchAPI', async () => {
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (err) {
//       return err.message;
//     }
//   },
// );

// const initialState = {
//   missionList: [],
//   isLoading: false,
//   error: undefined,
// };

// const MissionSlice = createSlice({
//   name: 'missions',
//   initialState,
//   reducers: {
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAPI.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchAPI.fulfilled, (state, action) => {
//         const mission = [];
//         action.payload.map((item) => {
//           let newMission = {};
//           newMission = {
//             id: item.mission_id,
//             name: item.mission_name,
//             desc: item.description,
//           };
//           return mission.push(newMission);
//         });
//         state.missionList = mission;
//         state.isLoading = false;
//       })
//       .addCase(fetchAPI.rejected, (state, action) => {
//         state.isLoading = false;
//         state.rocketList = [];

//         state.error = action.error.message;
//       });
//   },
// });

// export default MissionSlice.reducer;
