import { atom } from 'recoil';
import { STORE } from '../../contants';

export const accessTokenState = atom({
  key: STORE.ACCESS_TOKEN,
  default: ''
});