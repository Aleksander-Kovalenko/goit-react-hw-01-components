import styled from '@emotion/styled';

const setBgColor = ({ isOnline }) => {
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
  padding: 5px;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
