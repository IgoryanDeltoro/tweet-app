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
// export const handleCreateUserFulfilled = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   state.users.push(payload);
// };
// export const handleDeleteUserFulfilled = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   const index = state.users.findIndex(({ id }) => id === payload.id);
//   state.users.splice(index, 1);
// };
export const handlePutQueryFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.users = state.users.map(user => {
    return user.id === payload.id ? payload : user;
  });
  state.error = null;
};
