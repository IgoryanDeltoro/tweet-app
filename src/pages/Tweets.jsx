import { useEffect } from 'react';
import Users from '../components/users/Users';
import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../redux/operations';
import FilterDropDown from 'components/dropdown/FilterDropDown';

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <>
      <FilterDropDown />
      <Users />
    </>
  );
};
export default Tweets;
