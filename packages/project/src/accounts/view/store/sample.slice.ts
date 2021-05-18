import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { SampleState } from './sample.types';
import { timeoutPromise } from '../../../common/utils/promise';

export const INITIAL_STATE: SampleState = {
  sampleName: 'sample item',
  sampleUnits: 33
};

export const sampleThunk = createAsyncThunk('sampleStore/sampleThunk', async (sampleName: string, { dispatch }) => {
  dispatch(setSampleName(sampleName));
  await timeoutPromise(5000);
  dispatch(setSampleName('sample item'));
  return 'thunk finish';
});

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
  },
  extraReducers: (builder) => {
    builder.addCase(sampleThunk.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-console
      console.log(payload);
    });
  }
});

export const { setSample, setSampleName, resetConfiguration } = sampleStore.actions;

export default sampleStore.reducer;
