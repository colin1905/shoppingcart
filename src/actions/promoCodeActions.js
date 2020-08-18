import { PROMO_CODE } from './types';

//action creator
export const handleChange = e => dispatch => {
  dispatch({
    type: PROMO_CODE,

    payload: e.target.value
  });
};