import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { gridTools } from './tools/tools';
import Card from '../card/Card';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { putUserThunk } from '../../redux/operations';
import { removeFollower, setFollower } from '../../redux/filterSlice';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useAuth();

  const handleOnClick = (id, isFollow) => {
    const filteredFollower = users.filter(user => user.id === id);

    if (isFollow) {
      const followers = decrementCountFollowers(...filteredFollower);
      dispatch(putUserThunk({ ...filteredFollower[0], followers }));
      dispatch(removeFollower(id));
      return;
    } else {
      const followers = incrementCountFollowers(...filteredFollower);
      dispatch(putUserThunk({ ...filteredFollower[0], followers }));
      dispatch(setFollower(id));
    }
  };

  const incrementCountFollowers = filteredFollower => {
    return filteredFollower.followers + 1;
  };

  const decrementCountFollowers = filteredFollower => {
    return filteredFollower.followers - 1;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container {...gridTools}>
        {users.map(({ user, id, avatar, tweets, followers }) => (
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
      </Grid>
    </Box>
  );
};

export default Users;
