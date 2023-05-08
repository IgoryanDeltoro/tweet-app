import { useEffect } from 'react';
import Users from '../components/users/Users';
import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../redux/operations';

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return <Users />;
};
export default Tweets;
