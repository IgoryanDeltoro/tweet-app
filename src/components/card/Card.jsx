import logo from '../../images/logo.svg';
import picture from '../../images/picture.svg';
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
    <Card>
      <Logo src={logo} alt="logotype" />
      <ImgBox>
        <CardImg src={picture} alt="logotype" />
      </ImgBox>
      <Layout>
        <AvatarBox>
          <Avatar src={avatar} alt="people" />
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
