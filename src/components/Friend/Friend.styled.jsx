import styled from '@emotion/styled';

const setBgColor = ({ isOnline }) => {
  console.log(isOnline);
  switch (isOnline) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'transparent';
  }
};

export const ItemFriend = styled.li`
  display: flex;
  //   justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Status = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50% 50%;
  border: 1px solid #000;

  background-color: ${setBgColor};
`;
export const Avatar = styled.img`
  display: inline-block;
  width: 100px;
`;

export const NameFriend = styled.p`
  margin-left: 20px;
  font-size: 18px;
`;
