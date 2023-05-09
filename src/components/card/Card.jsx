import logo from '../../images/logo.svg';
import picture from '../../images/picture.svg';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import {
  CardImg,
  Logo,
  Button,
  Card,
  TweetText,
  FollowerText,
  Avatar,
  AvatarBox,
  Line,
  Layout,
  ImgBox,
} from './Card.styled';
import { useUsers } from '../../hooks/useUsers';
import { replacer } from 'general/replacer';

export default function MediaCard({
  id,
  avatar,
  tweets,
  followers,
  handleOnClick,
}) {
  const { followingsID } = useUsers();
  const isFollow = followingsID.includes(id);
  const changedFollowers = replacer(followers);

  return (
    <Grid item xs={3} sm={3} md={4}>
      <Card>
        <Logo src={logo} />
        <ImgBox>
          <CardImg src={picture} />
        </ImgBox>
        <Layout>
          <Line />
          <AvatarBox>
            <Avatar src={avatar} />
          </AvatarBox>
        </Layout>
        <TweetText>{tweets} tweets</TweetText>
        <FollowerText>{changedFollowers} followers</FollowerText>
        <Button
          className={isFollow ? 'green' : 'white'}
          onClick={() => handleOnClick(id, isFollow)}
        >
          {isFollow ? 'Following' : 'Follow'}
        </Button>
      </Card>
    </Grid>
  );
}

MediaCard.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.string,
  id: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  handleOnClick: PropTypes.func,
};
