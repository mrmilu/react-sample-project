import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import sample from '../../../accounts/view/store/sample.slice';

const store = configureStore({
  reducer: {
    sample
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
