import { useSelector } from 'react-redux';
import {
  selectError,
  selectFollowingsID,
  selectIsLoading,
  selectUsers,
} from '../redux/selectors';

export const useAuth = () => {
  const isLoading = useSelector(selectIsLoading);
  const users = useSelector(selectUsers);
  const error = useSelector(selectError);
  const followingsID = useSelector(selectFollowingsID);

  return {
    isLoading,
    users,
    error,
    followingsID,
  };
};
