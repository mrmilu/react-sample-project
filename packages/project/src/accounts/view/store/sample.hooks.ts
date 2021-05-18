import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../common/view/store/store';
import { selectSample, selectName } from './sample.selectors';
import { setSample, setSampleName, resetConfiguration, sampleThunk } from './sample.slice';
import type { SampleState } from './sample.types';

/**
 * Hook for sample: get, set and reset
 * @returns {readonly [any, ((newState: any) => PayloadAction<ThemeConfig, string>), (() => any)]}
 */
export function useReduxSample() {
  const dispatch = useAppDispatch();
  const state = useSelector(selectSample);
  return [
    useMemo(() => state, [state]),
    useCallback((newState: Partial<typeof state>) => dispatch(setSample(newState)), [dispatch]),
    useCallback(() => dispatch(resetConfiguration()), [dispatch])
  ] as const;
}

/**
 * Sample name: get and set
 * @returns {readonly [undefined, undefined]}
 */
export function useReduxSampleName() {
  const dispatch = useAppDispatch();
  const state = useSelector(selectName);
  return [
    useMemo(() => state, [state]),
    useCallback((newName: SampleState['sampleName']) => dispatch(setSampleName(newName)), [dispatch]),
    useCallback((newName: SampleState['sampleName']) => dispatch(sampleThunk(newName)), [dispatch])
  ] as const;
}
