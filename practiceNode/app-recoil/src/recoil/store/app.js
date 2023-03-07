import { atom } from 'recoil';
import { STORE } from '../../contants';

export const loadingState = atom({
  key: STORE.LOADING,
  default: false
});