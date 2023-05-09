export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleGetUsersFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.users = payload;
  state.error = null;
};
export const handlePutQueryFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.users = state.users.map(user => {
    return user.id === payload.id ? payload : user;
  });
  state.error = null;
};
