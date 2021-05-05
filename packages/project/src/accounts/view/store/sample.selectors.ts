import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../common/view/store/store';

function selectSampleBase(state: RootState) {
  return state.sample;
}

/**
 * Get sample name
 * @type {OutputSelector<() => any extends ((...args: any) => infer R) ? R : any, any, (res: any) => any>}
 */
export const selectName = createSelector([selectSampleBase], (sample) => sample.sampleName);

/**
 * Get sample units
 * @type {OutputSelector<() => any extends ((...args: any) => infer R) ? R : any, any, (res: any) => any>}
 */
export const selectSample = createSelector([selectSampleBase], (sample) => sample);
