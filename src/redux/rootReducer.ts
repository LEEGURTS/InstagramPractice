const initialState = {
  isLogined: Boolean,
};

const rootReducer = (state = initialState, action: any) => {
  return { ...state, isLoginded: action.payload };
};

export default rootReducer;
