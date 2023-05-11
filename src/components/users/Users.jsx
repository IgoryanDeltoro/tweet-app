import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '../card/Card';
import { useUsers } from '../../hooks/useUsers';
import { useDispatch, useSelector } from 'react-redux';
import { putUserThunk } from '../../redux/operations';
import { removeFollower, setFollower } from '../../redux/filter/filterSlice';
import { useState } from 'react';
import LoadMore from 'components/pagination/LoadMore';
import { getFilteredFollowers } from 'redux/selectors';
import { CardList, gridTools } from './Users.styled';
import { animateScroll } from 'react-scroll';

const Users = () => {
  const DEFAULT_PAGE = window.innerWidth < 900 ? 2 : 3;

  const { users, isLoading } = useUsers();
  const [loadMore, setLoadMore] = useState(DEFAULT_PAGE);
  const [page, setPage] = useState(1);

  const filteredUsers = useSelector(getFilteredFollowers);
  const countPagination = Math.round(filteredUsers.length / DEFAULT_PAGE);
  const dispatch = useDispatch();

  const handleOnClick = (id, isFollow) => {
    const followed = users.filter(user => user.id === id);

    if (isFollow) {
      const followers = decrementCountFollowers(...followed);
      dispatch(putUserThunk({ ...followed[0], followers }));
      dispatch(removeFollower(id));
      return;
    } else {
      const followers = incrementCountFollowers(...followed);
      dispatch(putUserThunk({ ...followed[0], followers }));
      dispatch(setFollower(id));
    }
  };

  const incrementCountFollowers = followed => {
    return followed.followers + 1;
  };

  const decrementCountFollowers = followed => {
    return followed.followers - 1;
  };

  const handleLoadMore = () => {
    setLoadMore(state => state + DEFAULT_PAGE);
    setPage(state => state + 1);
    smoothScroll();
  };

  const smoothScroll = () => {
    animateScroll.scrollToBottom({
      duration: 250,
      delay: 10,
      smooth: 'linear',
    });
  };

  return (
    <>
      <CardList>
        {[...filteredUsers]
          .splice(0, loadMore)
          .map(({ user, id, avatar, tweets, followers }) => (
            <Card
              key={id}
              id={id}
              user={user}
              avatar={avatar}
              tweets={tweets}
              followers={followers}
              handleOnClick={handleOnClick}
            />
          ))}
      </CardList>
      {!isLoading && (
        <>
          {page < countPagination && (
            <LoadMore handleLoadMore={handleLoadMore} />
          )}
        </>
      )}
    </>
  );
};

export default Users;
