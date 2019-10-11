/* eslint-disable */

const initialState = {
  isFetching: true,
  fetchError: null,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_BUILD_RESULTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          [action.payload.team]: {
            ...state[action.payload.team],
            [action.payload.framework]: {
              ...state[action.payload.framework],
              [action.payload.build]: action.payload.resp
            }
          }
        }
      };
    case "FETCH_BUILD_RESULTS_FAILURE":
      return { ...state, isFetching: true };
    default:
      return state;
  }
}
