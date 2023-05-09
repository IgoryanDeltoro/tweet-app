import { statusFilters } from './constants';
export const selectUsers = state => state.tweets.users;
export const selectIsLoading = state => state.tweets.isLoading;
export const selectError = state => state.tweets.error;
export const selectFollowingsID = state => state.filter.followingsID;
export const selectFilterStatus = state => state.filter.filterStatus;

export const getFilteredFollowers = state => {
  const users = selectUsers(state);
  const followingsID = selectFollowingsID(state);
  const statusFilter = selectFilterStatus(state);

  switch (statusFilter) {
    case statusFilters.all:
      return users;
    case statusFilters.follow:
      return users.filter(user => !followingsID.includes(user.id));
    case statusFilters.followings:
      return users.filter(user => followingsID.includes(user.id));
    default:
      return users;
  }
};
