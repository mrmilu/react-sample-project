import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../common/view/store/store';
import { selectSample, selectName } from './sample.selectors';
import { sampleStore } from './sample.slice';
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
    useCallback((newState: Partial<typeof state>) => dispatch(sampleStore.actions.setSample(newState)), [dispatch]),
    useCallback(() => dispatch(sampleStore.actions.resetConfiguration()), [dispatch])
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
    useCallback((newName: SampleState['sampleName']) => dispatch(sampleStore.actions.setSampleName(newName)), [dispatch])
  ] as const;
}
