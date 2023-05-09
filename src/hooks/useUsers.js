import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilterStatus,
  selectFollowingsID,
  selectIsLoading,
  selectUsers,
} from '../redux/selectors';

export const useUsers = () => {
  const isLoading = useSelector(selectIsLoading);
  const users = useSelector(selectUsers);
  const error = useSelector(selectError);
  const followingsID = useSelector(selectFollowingsID);
  const filterStatus = useSelector(selectFilterStatus);

  return {
    isLoading,
    users,
    error,
    followingsID,
    filterStatus,
  };
};
