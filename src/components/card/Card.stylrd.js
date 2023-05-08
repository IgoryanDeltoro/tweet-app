import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  padding-bottom: 36px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const Logo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;
export const CardImg = styled.img``;
export const ImgBox = styled.div`
  padding: 28px 36px 0 36px;
  margin-top: 28px;
`;

export const Avatar = styled.img`
  border-radius: 85.9232px;
`;
export const Line = styled.div`
  width: calc((100% - 80px) / 2);
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
`;
export const AvatarBox = styled.div`
  max-width: 80px;
  border: 8px solid #ebd8ff;
  border-radius: 85.9232px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const TweetText = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
  margin-bottom: 16px;
`;
export const FollowerText = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  text-align: center;
  margin-bottom: 26px;
`;
export const Button = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 14px 28px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: transparent;
  border-radius: 10.3108px;
  &.green {
    background: #5cd3a8;
  }
`;
