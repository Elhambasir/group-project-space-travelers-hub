// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/rocketsSlice';
import MissionReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: MissionReducer,
  },
});

export default store;
