import {SELECTED_ID} from '../../Constant';
export const getSelectedId = (id) => {
  return {
    type: SELECTED_ID,
    payload: {
      id,
    },
  };
};
