import {SELECTED_ID_SAGA} from '../../Constant';

const initialState = null;

const selectedData = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ID_SAGA:
      return action.payload.id;
    default:
      return state;
  }
};
export default selectedData;
