import { atom } from 'recoil';
import { STORE } from '../../contants';
import { persistAtom } from '../persist';

export const accessTokenState = atom({
  key: STORE.ACCESS_TOKEN,
  default: '',
  effects_UNSTABLE: [persistAtom]
});

export const accountIdState = atom({
  key: STORE.ACCOUNT_ID,
  default: '',
  effects_UNSTABLE: [persistAtom]
});