// DO NOT MODIFY, this file is autogenerated by tools/build.ts
export * from 'firebase/performance';
import { ɵzoneWrap } from '@angular/fire';
import {
  getPerformance as _getPerformance,
  initializePerformance as _initializePerformance,
  trace as _trace
} from 'firebase/performance';

export const getPerformance = ɵzoneWrap(_getPerformance, true);
export const initializePerformance = ɵzoneWrap(_initializePerformance, true);
export const trace = ɵzoneWrap(_trace, true, 2);
