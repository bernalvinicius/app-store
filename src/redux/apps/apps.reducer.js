import data from "./apps.data";

const INITIAL_STATE = {
  collections: data,
};

const appsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appsReducer;
