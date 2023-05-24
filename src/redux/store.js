// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import MissionReducer from './mission/missionSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    missions: MissionReducer,
  },
});
