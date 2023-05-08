export const selectUsers = state => state.tweets.users;
export const selectIsLoading = state => state.tweets.isLoading;
export const selectError = state => state.tweets.error;
export const selectFollowingsID = state => state.filter.followingsID;

// export const getFollowersOnId = state => {
//   const users = selectUsers(state);
//   const followingsID = selectFollowingsID(state);
//   return users.filter(user => followingsID.includes(user.id));
// };

export const getFilteredFollowers = state => {
  const users = selectUsers(state);
  const followingsID = selectFollowingsID(state);
  return users.filter(user => followingsID.includes(user.id));
};
