import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SampleState } from './sample.types';

export const INITIAL_STATE: SampleState = {
  sampleName: 'sample item',
  sampleUnits: 33
};

export const sampleStore = createSlice({
  name: 'sampleStore',
  initialState: INITIAL_STATE,
  reducers: {
    setSample: (state, action: PayloadAction<Partial<SampleState>>): SampleState => ({
      ...state,
      ...action.payload
    }),
    setSampleName: (state, action: PayloadAction<SampleState['sampleName']>): SampleState => ({
      ...state,
      sampleName: action.payload
    }),
    resetConfiguration: () => INITIAL_STATE
  }
});

export default sampleStore.reducer;
