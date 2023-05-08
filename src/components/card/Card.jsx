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
} from './Card.stylrd';
import { useAuth } from '../../hooks/useAuth';

export default function MediaCard({
  id,
  avatar,
  tweets,
  followers,
  handleOnClick,
}) {
  const { followingsID } = useAuth();
  const isFollow = followingsID.includes(id);
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
          <Line />
        </Layout>

        <TweetText>{tweets} tweets</TweetText>
        <FollowerText>{followers} followers</FollowerText>
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
